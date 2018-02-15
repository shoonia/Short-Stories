const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const page = require('./routes/page');

const PORT = process.env.PORT || 3000;
const indexHTML = path.resolve(__dirname, '../public/index.html');
const app = express();

app.use(compression());
app.use('/', express.static('public'));
app.use('/', express.static('seo'));
app.use(bodyParser.json());
app.use('/page', page);

app.get('/*', (req, res) => res.sendFile(indexHTML));

/* eslint no-console: off */
app.listen(PORT, () => console.info('Server is running on port:', PORT));

module.exports = app;
