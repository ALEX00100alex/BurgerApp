const mysql = require("mysql");

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
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

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'ALEX00100alex!!',
          database: 'burgers_DB'
    });
  };

module.exports = connection;