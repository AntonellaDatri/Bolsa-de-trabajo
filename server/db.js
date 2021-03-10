const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password : "postgres",
    host: "localhost",
    port: 5432,
    database: "bolsadetrabajo"
});

module.exports = pool;