const db = require("../db");

exports.addLocation = (req, res) => {
    const { name, latitude, longitude, altitude } = req.body;

    const sql = `INSERT INTO locations (name, latitude, longitude, altitude) VALUES (?, ?, ?, ?)`;
    db.query(sql, [name, latitude, longitude, altitude], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "Location added", id: result.insertId });
    });
};

exports.getLocationById = (req, res) => {
    const sql = `SELECT * FROM locations WHERE id = ?`;

    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json(result[0]);
    });
};
