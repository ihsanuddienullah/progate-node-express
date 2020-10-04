const express = require('express');
const mysql = require('mysql');

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progate_list_app'
});

conn.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('Success');
})

app.get('/', (req, res) => {
    conn.query(
      'SELECT * FROM users',
        (error, results) => {
        console.log(results);
        res.render('hello.ejs');
        }
    );
});

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.listen(3000);