const db = require("../database/dbconfig");

module.exports = {
    findExample,
    findByIdExample
}

function findExample() {
    return db("rpg_example");
}

function findByIdExample(id) {
    return db("pg_example")
    .where({ id })
    .first();
}