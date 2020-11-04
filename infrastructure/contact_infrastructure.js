var mysql = require("mysql");
const db = require("mysql-async-simple").makeDb();

async function obtenerContactoPorId(id) {
  let query;
  let resultado;
  var connection = mysql.createConnection({
    host: "localhost",
    user: "contacts",
    password: "contacts",
    database: "contacts",
  });

  await db.connect(connection);

  if (id) {
    query = `SELECT * FROM contacts where ID = ${id}`;
  } else {
    query = `SELECT * FROM contacts`;
  }

  try {
    resultado = await db.query(connection, query);
  } catch (err) {
    resultado = { error: "error" };
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

module.exports = {
  obtenerContactoPorId,
};
