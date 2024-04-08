const mysql = require('mysql');

var con = mysql.createConnection({
  host: "154.56.34.24",
  user: "u617021978_MigratioN6",
  password: "u617021978_MigratioN6"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});