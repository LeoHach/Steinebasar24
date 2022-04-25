const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'steinebasar_db',
    flags: "-MULTI_STATEMENTS"
});

// connect.
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySql connection successful.....')
});

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('shop');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/admin', (req, res) => {
    res.render('admin');
});


const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});