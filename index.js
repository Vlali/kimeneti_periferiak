const express = require('express');
const app = express();
const { resolve } = require('path');
const port = process.env.PORT || 5005;

app.use(express.static(resolve(__dirname, 'static')));

app.all('*', (req, res) => res.status(404).send('<h1>404-Page Not Found</h1>'));

app.listen(port, () =>
  console.log(`The server is listening on port ${port}...`)
);
