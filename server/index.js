const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const indexHTML = path.resolve(__dirname, '../public/index.html');
const app = express();

app.use(compression());
app.use('/', express.static('public'));
app.use(bodyParser.json());

app.get('/*', (req, res) => res.sendFile(indexHTML));

app.listen(PORT, () => console.info('Server is running on port:', PORT));

module.exports = app;
