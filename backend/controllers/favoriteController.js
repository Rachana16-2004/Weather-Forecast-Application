const db = require("../db");

exports.getFavorites = (req, res) => {
    const sql = `SELECT favorites.id, locations.name 
                 FROM favorites
                 JOIN locations ON favorites.location_id = locations.id`;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);

        res.json(results);
    });
};

exports.addFavorite = (req, res) => {
    const { location_id } = req.body;

    const sql = `INSERT INTO favorites (location_id) VALUES (?)`;
    db.query(sql, [location_id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "Added to favorites", id: result.insertId });
    });
};
