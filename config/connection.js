const mysql = require("mysql");

var PORT = process.env.PORT || 3306;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ALEX00100alex!!",
    database: "burgers_DB"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });


module.exports = connection;