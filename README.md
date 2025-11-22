# Weather Forecast Application 🌤️

A full-stack weather forecast web application built with **React (Frontend)** and **Node.js + Express + MySQL (Backend)**. Users can add locations, fetch weather forecasts, and manage favorite locations.

---

## 📁 Project Structure

```
weather-app/
│
├─ weather-backend/
│   ├─ server.js
│   ├─ db.js
│   ├─ routes/
│   │    ├─ weatherRoutes.js
│   │    ├─ locationRoutes.js
│   │    └─ favoriteRoutes.js
│   └─ controllers/
│        ├─ weatherController.js
│        ├─ locationController.js
│        └─ favoriteController.js
│
├─ weather-frontend/
│   ├─ src/
│   │    ├─ App.js
│   │    └─ components/
│   │         ├─ LocationForm.js
│   │         └─ WeatherDisplay.js
|   |    └─ services/
|   |         ├─ api.js
│   │         └─ WeatherApi.js
│   └─ package.json
│
└─ README.md
```

---

## ⚡ Backend Setup (Node.js + MySQL)

### 1. Install dependencies

```bash
cd weather-backend
npm init -y
npm install express mysql2 cors body-parser
```

### 2. Configure MySQL Database

Run the following SQL commands:

```sql
CREATE DATABASE weather_app;

USE weather_app;

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    altitude INT
);

CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location_id INT,
    FOREIGN KEY (location_id) REFERENCES locations(id)
);
```

Update `db.js` if your MySQL username/password differs.

### 3. Start Backend Server

```bash
node server.js
```

**Server will run on:** `http://localhost:3000`

### 4. Available API Endpoints

| Method | Endpoint                                       | Description                 |
| ------ | ---------------------------------------------- | --------------------------- |
| GET    | `/api/forecast?location=Delhi&date=2025-01-10` | Get mock weather data       |
| POST   | `/api/locations`                               | Add a new location          |
| GET    | `/api/locations/:id`                           | Get location details by ID  |
| GET    | `/api/favorites`                               | List all favorite locations |
| POST   | `/api/favorites`                               | Add a location to favorites |

---

## ⚛️ Frontend Setup (React)

### 1. Install dependencies

```bash
cd weather-frontend
npm install
```

### 2. Run React App

```bash
npm start
```

The frontend will open in the browser at `http://localhost:3000` (or default React port).

---

## 🛠 Usage

1. Add a new location using the **LocationForm**.
2. Fetch weather forecast for a location by entering location and date.
3. Add locations to **Favorites**.
4. View your favorite locations.

---

## 📌 Notes

* Backend uses mock weather data; no external API key is needed.
* MySQL database must be running locally with the configured schema.
* Ensure `weather-backend` server is running before using the frontend.

## Screenshot
![Home Page](images/screenshot1.png)
