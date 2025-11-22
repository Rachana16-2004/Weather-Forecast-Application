const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const weatherRoutes = require("./routes/weatherRoutes");
const locationRoutes = require("./routes/locationRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", weatherRoutes);
app.use("/api", locationRoutes);
app.use("/api", favoriteRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
