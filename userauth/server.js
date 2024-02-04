//import von bibliotheken
const express = require('express');
const path    = require('path');
const app     = express();
const bcrypt  = require('bcrypt'); //crypt der daten

app.use('/static', express.static(path.join(__dirname, '../sitefiles')));

const users = []
app.use(express.urlencoded({extended: false}))
app.post("/register" , async (req,res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.RegisterPassword,10)
        users.push({
            id: Date.now().toString(), // 12312312312 
            name: req.body.RegisterName,
            password: hashedPassword,
        })

        console.log(users);
        res.redirect('/login')
    } catch {
       console.log();
       req.redirect('/register')
    }

});

//Router der datein um sie auf den server zu laden
app.get('/Login', function (req, res) {
    res.sendFile(path.join(__dirname, '../sitefiles/Main-Site/mainmenu.html'));
});

app.get('/Register', function (req, res) {
    res.sendFile(path.join(__dirname, '../sitefiles/Register/Register.html'));
});



//unter port 3000 finden wir unseren localn server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
