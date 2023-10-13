const db = require('mysql2-promise')();
require('dotenv').config()
/* 
    as variaveis podem ser passadas por linha de comando
    ex: DB_HOST=xxxxxx DB_USER=xxxxxx DB_PASSWD=xxxxxx DB_NAME=xxxxxx 
    nodemon server/server.js
*/
 
db.configure({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWD,
    "database": process.env.DB_NAME    
});


module.exports = db;