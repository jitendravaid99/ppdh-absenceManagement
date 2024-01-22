// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { getData, postData, getDataByPersonId } = require('./apiController');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.set('views', path.join(__dirname, '../frontend/views')); // Update this line

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/data', getData);
app.post('/api/data', postData);
app.get('/api/getDataByPersonId', getDataByPersonId);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
