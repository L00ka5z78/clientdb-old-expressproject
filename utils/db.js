
// const mysql = require('mysql2/promise');
const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'clientdb',
    port: 3305,
    namedPlaceholders: true,
    decimalNumbers: true
});

module.exports = {
    pool,
};

