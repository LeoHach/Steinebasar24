var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'steinebasar_db',
    flags: "-MULTI_STATEMENTS"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Datenbank Verbidnung hergestellt!');
});

module.exports = conn;