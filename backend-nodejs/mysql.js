const mysql = require('mysql2');

const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // port: 3307 // optional if u are not use 3306(default port ) 

});

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected to the database');

    // create database
    let sql = 'CREATE DATABASE  etp_training'; 
    connection.query(sql, function(err){
        if(err) throw err;
        console.log('Database created');
    })
})
