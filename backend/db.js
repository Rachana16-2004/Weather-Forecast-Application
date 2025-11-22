const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Rachana@16",
    database: "weather_app",
});


module.exports = db;