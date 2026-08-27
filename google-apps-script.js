// Google Apps Script Code for Student Registration Form
// Deploy this as a Web App to handle form submissions

// Main function to handle POST requests
function doPost(e) {
  // Add this at the beginning to handle CORS properly
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    console.log('doPost called with raw event');
    if (!e) throw new Error('No event object received');

    // Meta diagnostics to help trace browser vs curl submissions
    const meta = {
      hasPostData: !!e.postData,
      postDataType: e.postData ? e.postData.type : null,
      postDataLength: e.postData ? (e.postData.length || (e.postData.contents ? e.postData.contents.length : null)) : null,
      parameterKeys: Object.keys(e.parameter || {}),
      userAgent: (e.parameter && e.parameter['User-Agent']) || null
    };
    console.log('REQUEST_META', JSON.stringify(meta));

    let data = {};
    
    // Check if data is sent as JSON or form data
    if (e.postData && e.postData.type === 'application/json') {
      console.log('Processing JSON data');
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      console.log('Processing form data');
      // Handle form data
      const parameters = e.parameter;
      data = {
        fullName: parameters.fullName || '',
        gender: parameters.gender || '',
        program_year: parameters.program_year || '',
        registrationNumber: parameters.registrationNumber || '',
        trade: parameters.trade || '',
        email: parameters.email || '',
        phoneNumber: parameters.phoneNumber || '',
        motivation: parameters.motivation || '',
        skills: parameters.skills || 'Not provided',
        termsAccepted: parameters.termsAccepted === 'true' || parameters.termsAccepted === true,
        submissionDate: parameters.submissionDate || new Date().toISOString(),
        timestamp: parameters.timestamp || Date.now()
      };
      // Support resume base64 passed as separate fields
      if (!data.resume && parameters.resume_data) {
        data.resume = {
          name: parameters.resume_name || 'resume',
          type: parameters.resume_type || 'application/octet-stream',
          data: parameters.resume_data
        };
        console.log('Reconstructed resume from discrete fields');
      }
      
      // Handle file upload from form data
      if (e.parameters && e.parameters.resume && e.parameters.resume[0]) {
        data.resumeFile = e.parameters.resume[0];
      }
    } else {
      throw new Error('No data received');
    }
    
  console.log('Processed data keys:', Object.keys(data));
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Ensure headers exist
    setupHeaders(sheet);
    
    // Process the form data
    const rowData = processFormData(data);
    
    // Add data to spreadsheet
    sheet.appendRow(rowData);
    console.log('Data added to spreadsheet');
    
    // Handle file upload if resume exists
    if (data.resume || data.resumeFile) {
      console.log('Processing file upload');
      handleFileUpload(data, spreadsheet);
    }
    
    // Send confirmation email
    sendConfirmationEmail(data);
    
    // Return success response
    const response = {
      success: true,
      message: 'Registration submitted successfully',
      timestamp: new Date().toISOString()
    };
    
    output.setContent(JSON.stringify(response));
    console.log('Returning success response');
    return output;
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    const errorResponse = {
      success: false,
      error: error.toString(),
      stack: error.stack
    };
    
    output.setContent(JSON.stringify(errorResponse));
    return output;
  }
}

// Handle GET requests and preflight OPTIONS requests for CORS
function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    console.log('doGet called with:', e);
    
    // Simple test to verify the web app is working
    const response = {
      message: 'Team Mavericks Registration API is running',
      status: 'active',
      timestamp: new Date().toISOString(),
      method: 'GET',
      parameters: e.parameter || {},
      user: Session.getActiveUser().getEmail() // This will help verify permissions
    };
    
    output.setContent(JSON.stringify(response));
    return output;
      
  } catch (error) {
    console.error('Error in doGet:', error);
    const errorResponse = {
      error: error.toString(),
      stack: error.stack,
      timestamp: new Date().toISOString()
    };
    output.setContent(JSON.stringify(errorResponse));
    return output;
  }
}

// Simple test function that can be called via GET with parameters
function testEndpoint() {
  return ContentService
    .createTextOutput('Test endpoint working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Test function to verify permissions - run this first in the Apps Script editor
function testPermissions() {
  try {
    console.log('Testing permissions...');
    
    // Test Sheets access
    const spreadsheet = getOrCreateSpreadsheet();
    console.log('Sheets access: OK');
    
    // Test Drive access
    const folders = DriveApp.getFoldersByName('Team Mavericks - Resumes');
    console.log('Drive access: OK');
    
    // Test Gmail access (if needed)
    // GmailApp.getInboxThreads(0, 1);
    // console.log('Gmail access: OK');
    
    console.log('All permissions working correctly!');
    return 'Success: All permissions granted';
    
  } catch (error) {
    console.error('Permission test failed:', error);
    return 'Error: ' + error.toString();
  }
}

// Get or create the spreadsheet
function getOrCreateSpreadsheet() {
  const spreadsheetName = 'Team Mavericks - Student Registrations';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.openById(file.getId());
  } else {
    // Create new spreadsheet
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    
    // Share with your team email (optional)
    // spreadsheet.addEditor('your-team-email@example.com');
    
    return spreadsheet;
  }
}

// Setup headers in the spreadsheet
function setupHeaders(sheet) {
  const newHeaders = [
    'Timestamp',
    'Full Name',
    'Registration Number', 
    'Gender',
    'Program/Year',
    'Branch/Trade',
    'Email',
    'Phone Number',
    'Motivation',
    'Technical Skills',
    'Terms Accepted',
    'Resume File Name',
    'Resume Drive Link',
    'Submission Date',
    'Status'
  ];

  if (sheet.getLastRow() === 0) {
    // New sheet - set up fresh headers
    sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, newHeaders.length);
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    headerRange.setFontWeight('bold');
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, newHeaders.length);
    
    console.log('New spreadsheet created with updated headers');
  } else {
    // Existing sheet - check if migration is needed
    const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const hasGenderColumn = existingHeaders.includes('Gender');
    const hasProgramYearColumn = existingHeaders.includes('Program/Year');
    
    if (!hasGenderColumn || !hasProgramYearColumn) {
      console.log('Migrating existing spreadsheet to include missing columns');
      migrateExistingSheet(sheet, existingHeaders, newHeaders);
    } else {
      console.log('Spreadsheet already has all required columns - no migration needed');
    }
  }
}

// Migrate existing spreadsheet to new structure
function migrateExistingSheet(sheet, oldHeaders, newHeaders) {
  try {
    console.log('Starting sheet migration...');
    
    // Get all existing data
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    
    if (lastRow > 1) {
      // Get all existing data (excluding headers)
      const existingData = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
      
      // Create mapping from old structure to new structure
      const columnMap = createColumnMapping(oldHeaders, newHeaders);
      console.log('Column mapping:', columnMap);
      
      // Transform existing data to new structure
      const migratedData = existingData.map(row => {
        const newRow = new Array(newHeaders.length).fill('');
        
        // Map existing data to new positions
        oldHeaders.forEach((oldHeader, oldIndex) => {
          const newIndex = columnMap[oldHeader];
          if (newIndex !== undefined && row[oldIndex] !== undefined) {
            newRow[newIndex] = row[oldIndex];
          }
        });
        
        // Set default values for new columns
        const genderIndex = newHeaders.indexOf('Gender');
        if (genderIndex !== -1 && !newRow[genderIndex]) {
          newRow[genderIndex] = 'Not specified'; // Default for existing records
        }
        
        const programYearIndex = newHeaders.indexOf('Program/Year');
        if (programYearIndex !== -1 && !newRow[programYearIndex]) {
          newRow[programYearIndex] = 'Not specified'; // Default for existing records
        }
        
        return newRow;
      });
      
      // Clear existing data (keep headers for now)
      if (lastRow > 1) {
        sheet.getRange(2, 1, lastRow - 1, lastCol).clear();
      }
      
      // Set new headers
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
      
      // Insert migrated data
      if (migratedData.length > 0) {
        sheet.getRange(2, 1, migratedData.length, newHeaders.length).setValues(migratedData);
      }
      
      // Format new headers
      const headerRange = sheet.getRange(1, 1, 1, newHeaders.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white'); 
      headerRange.setFontWeight('bold');
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, newHeaders.length);
      
      console.log(`Migration completed! Migrated ${migratedData.length} records`);
      
      // Add migration log entry
      sheet.appendRow([
        new Date(),
        'SYSTEM MIGRATION',
        '',
        'System Update',
        'Not specified',
        'system@mavericks.sliet.ac.in',
        '',
        `Spreadsheet migrated to include Gender and Program/Year columns. ${migratedData.length} existing records preserved.`,
        '',
        'Yes',
        '',
        '',
        new Date().toISOString(),
        'Migration'
      ]);
      
    } else {
      // Only headers exist, just update them
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
      console.log('Updated headers only - no data to migrate');
    }
    
  } catch (error) {
    console.error('Migration failed:', error);
    throw new Error('Sheet migration failed: ' + error.toString());
  }
}

// Create mapping between old and new column positions
function createColumnMapping(oldHeaders, newHeaders) {
  const mapping = {};
  
  oldHeaders.forEach((oldHeader, oldIndex) => {
    const newIndex = newHeaders.indexOf(oldHeader);
    if (newIndex !== -1) {
      mapping[oldHeader] = newIndex;
    }
  });
  
  return mapping;
}

// Manual migration function - can be called from Apps Script editor
function manualMigration() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Starting manual migration...');
    
    // Get current headers
    const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    console.log('Current headers:', existingHeaders);
    
    // Expected new headers
    const newHeaders = [
      'Timestamp',
      'Full Name', 
      'Registration Number',
      'Gender',
      'Program/Year',
      'Branch/Trade',
      'Email',
      'Phone Number',
      'Motivation',
      'Technical Skills',
      'Terms Accepted',
      'Resume File Name',
      'Resume Drive Link',
      'Submission Date',
      'Status'
    ];
    
    const hasGenderColumn = existingHeaders.includes('Gender');
    const hasProgramYearColumn = existingHeaders.includes('Program/Year');
    
    if (!hasGenderColumn || !hasProgramYearColumn) {
      migrateExistingSheet(sheet, existingHeaders, newHeaders);
      console.log('Manual migration completed successfully!');
      return 'Migration completed successfully!';
    } else {
      console.log('No migration needed - Gender column already exists');
      return 'No migration needed - spreadsheet is already up to date';
    }
    
  } catch (error) {
    console.error('Manual migration failed:', error);
    return 'Migration failed: ' + error.toString();
  }
}

// Backup function - creates a backup before migration
function createBackupBeforeMigration() {
  try {
    const originalSpreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const backupName = `Mavericks Registration Backup - ${new Date().toISOString().split('T')[0]}`;
    
    // Create backup copy
    const backup = originalSpreadsheet.copy(backupName);
    
    console.log('Backup created:', backup.getUrl());
    return 'Backup created successfully: ' + backup.getUrl();
    
  } catch (error) {
    console.error('Backup creation failed:', error);
    return 'Backup failed: ' + error.toString();
  }
}

// Process form data into array for spreadsheet row
// Column structure (1-based indexing):
// 1=Timestamp, 2=Full Name, 3=Registration Number, 4=Gender, 5=Program/Year, 
// 6=Branch/Trade, 7=Email, 8=Phone Number, 9=Motivation, 10=Technical Skills,
// 11=Terms Accepted, 12=Resume File Name, 13=Resume Drive Link, 14=Submission Date, 15=Status
function processFormData(data) {
  return [
    new Date(), // Timestamp
    data.fullName || '',
    data.registrationNumber || '',
    data.gender || '',
    data.program_year || '',
    data.trade || '',
    data.email || '',
    data.phoneNumber || '',
    data.motivation || '',
    data.skills || 'Not provided',
    data.termsAccepted ? 'Yes' : 'No',
    data.resume ? data.resume.name : 'No resume',
    '', // Resume Drive Link (will be filled by handleFileUpload)
    data.submissionDate || new Date().toISOString(),
    'New' // Status
  ];
}

// Handle file upload to Google Drive
function handleFileUpload(data, spreadsheet) {
  try {
    let resumeFile = null;
    let fileName = '';
    
    // Handle different file input methods
    if (data.resume && data.resume.data) {
      // Base64 encoded file from JSON
      const blob = Utilities.newBlob(
        Utilities.base64Decode(data.resume.data),
        data.resume.type,
        data.resume.name
      );
      resumeFile = blob;
      fileName = data.resume.name;
    } else if (data.resumeFile) {
      // File from form data
      resumeFile = data.resumeFile;
      fileName = data.resumeFile.getName();
    }
    
    if (resumeFile) {
      // Create folder for resumes if it doesn't exist
      const folderName = 'Team Mavericks - Resumes';
      let folder;
      
      const folders = DriveApp.getFoldersByName(folderName);
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
        // Make folder accessible to your team
        // folder.addEditor('your-team-email@example.com');
      }
      
      // Create unique filename
      const uniqueFileName = `${data.registrationNumber}_${data.fullName}_${fileName}`;
      
      // Save file to Drive
      const file = folder.createFile(resumeFile.setName(uniqueFileName));
      
      // Make file accessible
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      
      // Update the spreadsheet with the Drive link
      const sheet = spreadsheet.getActiveSheet();
      const lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 13).setValue(file.getUrl()); // Resume Drive Link column (13th column)
      
      return file.getUrl();
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    
    // Update spreadsheet with error note
    try {
      const sheet = spreadsheet.getActiveSheet();
      const lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 13).setValue('File upload failed: ' + error.toString()); // Resume Drive Link column (13th column)
    } catch (sheetError) {
      console.error('Error updating spreadsheet with file error:', sheetError);
    }
    
    return null;
  }
}

// Send confirmation email to the applicant
function sendConfirmationEmail(data) {
  try {
    const subject = 'Team Mavericks - Registration Received';
    const whatsappLink = 'https://chat.whatsapp.com/EU7RGTxkJUqA73vVDXprDL';
    const body = `
Dear ${data.fullName},

Thank you for your interest in joining Team Mavericks!

We have received your registration with the following details:
- Registration Number: ${data.registrationNumber}
- Branch: ${data.trade}
- Gender: ${data.gender}
- Email: ${data.email}
- Phone: ${data.phoneNumber}

Please join our WhatsApp group for all notices and updates regarding the recruitment process:
${whatsappLink}

Our team will review your application and get back to you soon.

Best regards,
Team Mavericks
SLIET Longowal

---
This is an automated message. Please do not reply to this email.
    `;
    
    GmailApp.sendEmail(data.email, subject, body);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

// Optional: Send notification email to team
function sendTeamNotification(data) {
  try {
    const teamEmail = 'myndroid4004@gmail.com'; // Replace with actual team email
    const subject = 'New Student Registration - Team Mavericks';
    const body = `
New student registration received:

Name: ${data.fullName}
Registration Number: ${data.registrationNumber}
Branch: ${data.trade}
Gender: ${data.gender}
Program/Year: ${data.program_year}
Email: ${data.email}
Phone: ${data.phoneNumber}

Please review the application in the Google Sheets dashboard.

Best regards,
Registration System
    `;
    
    GmailApp.sendEmail(teamEmail, subject, body);
  } catch (error) {
    console.error('Error sending team notification:', error);
  }
}