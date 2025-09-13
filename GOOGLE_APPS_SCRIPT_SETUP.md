# Google Apps Script Setup for Student Registration Form

This guide will help you set up Google Apps Script to handle form submissions and store them in Google Sheets.

## 📋 Prerequisites

- Google account
- Access to Google Drive
- Access to Google Apps Script (script.google.com)

## 🚀 Setup Instructions

### Step 1: Create Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click "New project"
3. Replace the default code with the code from `google-apps-script.js`
4. Save the project (Ctrl+S) and give it a name like "Team Mavericks Registration"

### Step 2: Deploy as Web App

1. Click "Deploy" button in the top-right corner
2. Select "New deployment"
3. Click the gear icon ⚙️ next to "Type" and select "Web app"
4. Fill in the deployment details:
   - **Description**: "Team Mavericks Student Registration API"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. Copy the **Web app URL** - you'll need this for the frontend

### Step 3: Update Frontend Code

1. Open `src/views/StudentRegistration.vue`
2. Find the line with `YOUR_GOOGLE_APPS_SCRIPT_URL`
3. Replace it with your actual Web App URL from Step 2

```javascript
// Replace this line:
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {

// With your actual URL:
const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
```

### Step 4: Test the Setup

1. Submit a test registration through your form
2. Check if a Google Sheet named "Team Mavericks - Student Registrations" was created
3. Verify that the data appears in the sheet
4. Check if resume files are uploaded to a "Team Mavericks - Resumes" folder

## 📊 Google Sheets Structure

The script will automatically create a spreadsheet with these columns:

| Column | Description |
|--------|-------------|
| Timestamp | When the form was submitted |
| Full Name | Student's full name |
| Registration Number | Student ID |
| Branch/Trade | Engineering branch |
| Email | Contact email |
| Phone Number | Contact phone |
| Motivation | Why they want to join |
| Technical Skills | Programming/technical experience |
| Terms Accepted | Agreement confirmation |
| Resume File Name | Original file name |
| Resume Drive Link | Google Drive link to resume |
| Submission Date | ISO date string |
| Status | Application status (New, Reviewed, etc.) |

## 📁 File Organization

- **Google Sheet**: `Team Mavericks - Student Registrations`
- **Drive Folder**: `Team Mavericks - Resumes`
- Resume files are named: `{RegNumber}_{StudentName}_{OriginalFileName}`

## ⚙️ Optional Configurations

### Enable Email Notifications

Uncomment these lines in the Apps Script:

```javascript
// Send confirmation email to applicant
sendConfirmationEmail(data);

// Send notification to team
sendTeamNotification(data);
```

And update the team email:
```javascript
const teamEmail = 'your-team-email@example.com';
```

### Share Spreadsheet with Team

Uncomment and update this line:
```javascript
spreadsheet.addEditor('your-team-email@example.com');
```

### Make Resume Folder Accessible

Uncomment and update this line:
```javascript
folder.addEditor('your-team-email@example.com');
```

## 🔒 Security Notes

- The Web App is set to "Anyone" access for form submissions
- Files are stored in your Google Drive
- Resume files are accessible via link to anyone with the URL
- Consider implementing additional validation if needed

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure the Web App is deployed with "Anyone" access
2. **Permission Errors**: Grant necessary permissions when first running the script
3. **File Upload Fails**: Check file size limits (Google Apps Script has a 50MB limit)
4. **Script Timeout**: For large files, consider implementing chunked uploads

### View Logs:

1. Go to your Apps Script project
2. Click "Executions" in the left sidebar
3. Check for errors in the execution logs

### Test the Script:

1. Use the Apps Script editor's debugger
2. Add `console.log()` statements to track execution
3. Use the "Run" button to test functions manually

## 📞 Support

If you encounter issues:

1. Check the Google Apps Script execution logs
2. Verify all permissions are granted
3. Test with a simple form submission first
4. Check browser console for JavaScript errors

## 🎯 Next Steps

After setup:

1. Test form submissions thoroughly
2. Set up email notifications for your team
3. Create a process for reviewing applications
4. Consider adding status updates in the spreadsheet
5. Set up automated responses based on application status

---

**Note**: Remember to keep your Apps Script Web App URL secure and don't share it publicly unless necessary.