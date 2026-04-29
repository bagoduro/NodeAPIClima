class WeatherDTO {
    constructor(data) {
        this.cidade = data.name;
        this.pais = data.sys.country;
        this.temperatura = `${data.main.temp.toFixed(1)}°C`;
        this.sensacao_termica = `${data.main.feels_like.toFixed(1)}°C`;
        this.clima = data.weather[0].description;
        this.umidade = `${data.main.humidity}%`;
        this.velocidade_vento = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    }
}

module.exports = WeatherDTO;
