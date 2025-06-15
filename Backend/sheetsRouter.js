// sheetsRouter.js
const express = require('express');
const getSheetsService = require('./getSheetsService');
const router = express.Router();

router.post('/add-row', async (req, res) => {
  try {
    const {
      Name,
      MobileNumber,
      carNumber,
      cngKitNumber,
      cngKitModelName,
      fittingDate,
      lastServiceDate
    } = req.body;

    // Calculate dates
    const nextServiceDate = new Date(lastServiceDate);
    nextServiceDate.setMonth(nextServiceDate.getMonth() + 6);

    const testingDate = new Date(fittingDate);
    testingDate.setFullYear(testingDate.getFullYear() + 3);

    // Get Sheets API client (with full access)
    const sheets = await getSheetsService();

    // Append values to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1wf-68B8BbVofFqgtI1bVgx0kuRzdS-ukZquUI_Ef-8U', // 🚩 your sheet ID
      range: 'Sheet1!A1',                                          // starting point for append
      valueInputOption: 'RAW',
      resource: {
        values: [[
          Name,
          MobileNumber,
          carNumber,
          cngKitNumber,
          cngKitModelName,
          fittingDate,
          lastServiceDate,
          nextServiceDate.toISOString().split('T')[0],
          testingDate.toISOString().split('T')[0]
        ]]
      }
    });

    res.send('✅ Car added to Google Sheet!');
  } catch (err) {
    console.error('❌ Error writing to sheet:', err);
    res.status(500).send('❌ Error adding car');
  }
});

module.exports = router;
