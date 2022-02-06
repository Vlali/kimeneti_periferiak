const express = require('express')();
const app = express();
const { resolve } = require('path');

app.use(express.static(resolve(__dirname, 'index.js')));

app.all('*', (req, res) => res.status(404).send('<h1>404-Page Not Found</h1>'));

app.listen(process.env.PORT || 5000);
