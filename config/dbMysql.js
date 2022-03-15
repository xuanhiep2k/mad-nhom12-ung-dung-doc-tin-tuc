const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'});

const host = process.env.DB_HOST;
const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

//create connection pool

const conn = mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: name,
    });

conn.connect((error) =>{
    if(error) throw error;
    console.log('Connected to DB successfully');
})

module.exports = conn;