const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: rootCertificates,
    password: 'Password',
    database: 'employeeDB'
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
