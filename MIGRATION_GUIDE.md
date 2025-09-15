# Sheet Migration Guide

## Problem
You have an existing Google Spreadsheet with student registration data but it's missing the new **Gender** and **Program/Year** columns.

## Solutions

### Option 1: Automatic Migration (Recommended)
The updated Google Apps Script will automatically detect and migrate your existing sheet when the first new form is submitted.

**What happens:**
1. Script checks if "Gender" and "Program/Year" columns exist
2. If missing, it automatically migrates the data
3. Preserves all existing records
4. Adds "Not specified" as default for old records in missing columns
5. Logs the migration process

**No action needed** - just deploy the updated script!

---

### Option 2: Manual Migration
If you want to migrate immediately without waiting for a form submission:

1. **Create Backup First:**
   ```javascript
   // Run this function in Apps Script Editor
   createBackupBeforeMigration()
   ```

2. **Run Manual Migration:**
   ```javascript  
   // Run this function in Apps Script Editor
   manualMigration()
   ```

---

### Option 3: Manual Column Addition
If you prefer to add the columns manually:

1. **Open your Google Sheet**
2. **Insert new column** after "Registration Number" (Column D) - Add header: "Gender" 
3. **Insert new column** after "Gender" (Column E) - Add header: "Program/Year"
4. **Fill existing rows:** Add "Not specified" for all existing data in both columns
5. **Deploy updated script**

---

## Migration Details

### Column Mapping
**Before:**
1. Timestamp
2. Full Name  
3. Registration Number
4. Branch/Trade (❌ Missing Gender & Program/Year)
5. Email
6. Phone Number
7. ...etc

**After:**
1. Timestamp
2. Full Name
3. Registration Number  
4. **Gender** (🆕 New column)
5. **Program/Year** (🆕 New column)
6. Branch/Trade
7. Email
8. Phone Number
9. ...etc

### Data Preservation
- ✅ All existing data preserved
- ✅ No data loss during migration
- ✅ Automatic backup creation option
- ✅ Migration logging for audit trail
- ✅ Default values added for missing columns

## Testing
After migration, test with a new form submission to ensure:
- [x] New submissions include gender and program/year
- [x] Existing data remains intact
- [x] Column order is correct
- [x] Email notifications work properly
- [x] Program/Year displays as combined format (e.g., "BE 2nd")

## Rollback Plan
If something goes wrong:
1. Use the backup created by `createBackupBeforeMigration()`
2. Copy data back to original sheet
3. Contact support for assistance

## FAQ

**Q: Will I lose existing data?**
A: No, the migration preserves all existing records.

**Q: What values are set for old records?**  
A: "Not specified" is automatically added for both Gender and Program/Year.

**Q: Can I test this safely?**
A: Yes, use `createBackupBeforeMigration()` first.

**Q: Do I need to update form submissions?**
A: No, the script handles both old and new formats.

**Q: How is Program/Year data stored?**
A: As combined format like "BE 2nd", "ICD 1st", etc.