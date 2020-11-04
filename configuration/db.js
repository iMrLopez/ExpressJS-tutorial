const connectionConfig = {
    host: "localhost",
    user: "contacts",
    password: "contacts",
    database: "contacts",
};

const selectTodosContactos = `SELECT * FROM contacts`;
const selectContactoPorId = `SELECT * FROM contacts where ID = ${id}`;

module.exports = {
    connectionConfig,
    selectTodosContactos,
    selectContactoPorId
}