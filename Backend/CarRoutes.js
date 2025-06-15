const express = require('express');
const getSheetsService = require('./getSheetsService');
const router = express.Router();

const SHEET_ID = '1wf-68B8BbVofFqgtI1bVgx0kuRzdS-ukZquUI_Ef-8U'; // ✅ Use your actual Sheet ID
const RANGE = 'Sheet1!A2:I'; // A1:I1 is assumed to be header row

// 🔍 GET cars by mobile number
router.get('/cars', async (req, res) => {
  const { mobile } = req.query;
  if (!mobile) return res.status(400).send("⚠️ Missing mobile number");

  try {
    const sheets = await getSheetsService();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE
    });

    const rows = response.data.values || [];

    // 🔍 Filter by mobile number (column B → index 1)
    const cars = rows
      .map((row, index) => ({
        rowNumber: index + 2, // index offset by 2 to match sheet row number
        Name: row[0] || '',
        MobileNumber: row[1] || '',
        carNumber: row[2] || '',
        cngKitNumber: row[3] || '',
        cngKitModelName: row[4] || '',
        fittingDate: row[5] || '',
        lastServiceDate: row[6] || '',
        nextServiceDate: row[7] || '',
        testingDate: row[8] || ''
      }))
      .filter(car => car.MobileNumber === mobile);

    res.json(cars);
  } catch (err) {
    console.error('❌ Error fetching data:', err);
    res.status(500).send('❌ Failed to fetch cars');
  }
});

// ❌ DELETE a row by row number
router.delete('/cars/:row', async (req, res) => {
  const rowToDelete = parseInt(req.params.row);
  if (isNaN(rowToDelete) || rowToDelete < 2) {
    return res.status(400).send("⚠️ Invalid row number");
  }

  try {
    const sheets = await getSheetsService();

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 0, // 🔁 Make sure this matches your actual sheet tab ID (usually 0 for first sheet)
                dimension: 'ROWS',
                startIndex: rowToDelete - 1, // zero-based index
                endIndex: rowToDelete
              }
            }
          }
        ]
      }
    });

    res.send("✅ Row deleted successfully");
  } catch (err) {
    console.error('❌ Error deleting row:', err);
    res.status(500).send("❌ Failed to delete car");
  }
});

module.exports = router;
