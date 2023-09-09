const mySQL = require("mysql2");
require("dotenv").config();

const db = mySQL.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "innovantumLabs"
});

// Expoerting DB connection
module.exports = { db }

