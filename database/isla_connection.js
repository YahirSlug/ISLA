const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "isla_database",
});

connection.connect((error) => {
  if (error) {
    console.log(`Error >///< \n${error}`);
    return;
  }
  console.log(`Conexion Correcta n.n`);
});

module.exports = connection;


