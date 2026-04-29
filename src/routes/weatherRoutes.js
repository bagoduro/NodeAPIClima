const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/WeatherController');

router.get('/:cidade', WeatherController.getWeather);

module.exports = router;
