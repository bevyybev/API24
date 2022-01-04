//Database Connection
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sa',
  password : 'reallyStrongPwd123',
  database : 'BikeStores',
  port: 1433
})
 

module.exports = mysql