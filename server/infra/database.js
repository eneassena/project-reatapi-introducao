const pgp = require('pg-promise')(/* options */);
const db = pgp({
	user: 'postgres',
	password: '1234',
	host: 'localhost',
	port: '5432',
	database: 'mercado'
});
 
module.exports = db;