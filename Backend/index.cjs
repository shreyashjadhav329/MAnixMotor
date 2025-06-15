const express = require('express');
const cors = require('cors');
const sheetsRouter = require('./sheetsRouter');
const carRoutes = require('./CarRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/', sheetsRouter);     // for CarForm POST
app.use('/', carRoutes);        // for CarList GET + DELETE

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
