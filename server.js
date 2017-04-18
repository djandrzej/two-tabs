/*eslint-disable import/unambiguous, import/no-nodejs-modules, no-console*/
const path = require('path');
const express = require('express');

const PORT = 3333;

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
