const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

const getSheetsService = async () => {
  const auth = new GoogleAuth({
    keyFile: './manixcng-02ed26f22a10.json', // ✅ Path to your service account JSON
    scopes: ['https://www.googleapis.com/auth/spreadsheets'] // ✅ Full access
  });

  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  return sheets;
};

module.exports = getSheetsService;
