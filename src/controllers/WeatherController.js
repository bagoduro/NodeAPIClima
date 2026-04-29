const WeatherService = require('../services/WeatherService');

class WeatherController {
    async getWeather(req, res) {
        const { cidade } = req.params;

        if (!cidade) {
            return res.status(400).json({ error: 'O nome da cidade é obrigatório.' });
        }

        try {
            const weatherData = await WeatherService.getWeatherByCity(cidade);
            return res.status(200).json(weatherData);
        } catch (error) {
            return res.status(error.message.includes('não encontrada') ? 404 : 400).json({
                error: error.message
            });
        }
    }
}

module.exports = new WeatherController();
