var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'cdev',
    database: 'restaurant_review'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected to DB');

});
module.exports = connection;