const express = require("express");
const path = require('path');
const bodyparser = require('body-parser');
const session = require("express-session");
const {v4: uuidv4} = require('uuid');
const router = require('./router');

const app = express();



const port = process.env.PORT || 3000 ;

app.set('view engine', 'ejs');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret: 'uuidv4', //hash pass
    resave: 'false',
    saveUninitialized: true
}));

app.use('/route', router);

//load static
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
    res.render('base',{Titel: "Login System"});
})

app.listen(port, () => {
    console.log("listening server on http://localhost:3000");
});