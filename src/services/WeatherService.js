const axios = require('axios');
const WeatherDTO = require('../dtos/WeatherDTO');
require('dotenv').config();

class WeatherService {
    async getWeatherByCity(city) {
        try {
            const response = await axios.get(process.env.WEATHER_API_URL, {
                params: {
                    q: city,
                    appid: process.env.WEATHER_API_KEY,
                    units: 'metric',
                    lang: 'pt_br'
                }
            });

            return new WeatherDTO(response.data);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    throw new Error('Cidade não encontrada.');
                }
                if (error.response.status === 401) {
                    throw new Error('Chave de API inválida ou expirada.');
                }
                throw new Error(`Erro na API externa: ${error.response.status}`);
            }
            throw new Error('Erro ao conectar com o serviço de clima.');
        }
    }
}

module.exports = new WeatherService();
