const express = require('express');
const path    = require('path');
const app     = express();

app.use('/static', express.static(path.join(__dirname, '../sitefiles')));

app.get('/Login', function (req, res) {
    res.sendFile(path.join(__dirname, '../sitefiles/Main-Site/mainmenu.html'));
});

app.get('/Register', function (req, res) {
    res.sendFile(path.join(__dirname, '../sitefiles/Register/Register.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
