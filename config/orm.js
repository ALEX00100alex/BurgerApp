const connection = require('./connection');

const orm = {
    selectAll(table, callback) {
      const queryString = 'SELECT * FROM ??';
      connection.query(
        queryString,
        [table],
        (err, result) => {
          if (err) throw err;
          console.log("orm.js", result);
          callback(result);
        }
      );
    },
    insertOne(table, data, callback) {
      const queryString = `INSERT INTO ?? (??) VALUES (??)`;
      console.log(queryString);
      connection.query(
        queryString,
        [table, Object.keys(data), Object.values(data)],
        (err, result) => {
          if (err) throw err;
          callback(result);
        }
      );
    },
    updateOne(table, colName, newValue, id, callback) {
      const queryString =
        `UPDATE ?? SET ?? = "??" WHERE id = "??"`;  
      connection.query(
        queryString,
        [table, colName, newValue, id],
        (err, result) => {
          if (err) throw err;
          callback(result);
        }
      );
    },
  };
  
  module.exports = orm;