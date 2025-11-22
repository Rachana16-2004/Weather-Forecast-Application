const axios = require("axios");

exports.getForecast = async (req, res) => {
    const { location, date } = req.query;

    if (!location || !date)
        return res.status(400).json({ error: "Location and Date required" });

    try {
        const apiKey = "9d83767161d842fd978143846252111"; // Replace with your key

    
        const weatherRes = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1`);
        

        const forecastData = weatherRes.data.forecast.forecastday[0];
        const hourlyTemperatures = forecastData.hour.map(h => h.temp_c);
        const conditionDistribution = {};
        forecastData.hour.forEach(h => {
            const cond = h.condition.text;
            conditionDistribution[cond] = (conditionDistribution[cond] || 0) + 1;
        });

        const response = {
            location: weatherRes.data.location.name,
            date: forecastData.date,
            temperature: forecastData.day.avgtemp_c,
            humidity: forecastData.day.avghumidity,
            conditions: forecastData.day.condition.text,
            wind_speed: forecastData.day.maxwind_kph,
            uv_index: forecastData.day.uv,
            hourly_temperatures: hourlyTemperatures,
            condition_distribution: conditionDistribution
        };

        res.json(response);

    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to fetch weather data from WeatherAPI" });
    }
};
