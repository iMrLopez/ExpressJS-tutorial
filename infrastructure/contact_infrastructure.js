var mysql = require("mysql");
const db = require("mysql-async-simple").makeDb();
const config = require('../configuration/db');

async function obtenerContactoPorId(id) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    resultado = await db.query(connection, (id)?config.selectContactoPorId:config.selectTodosContactos);
  } catch (err) {
    //console.log(err)
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

module.exports = {
  obtenerContactoPorId,
};
