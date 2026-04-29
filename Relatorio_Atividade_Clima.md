# Relatório de Atividade Prática: Consumo de API de Clima

## 1. Identificação
- **Curso:** Engenharia de Software - FANS (5º Período)
- **Atividade:** Consumo de API Externa no Back End
- **Tecnologia Escolhida:** Node.js com Express

## 2. Descrição do Projeto
O projeto consiste em uma API REST desenvolvida em Node.js que consome dados meteorológicos em tempo real da API externa **OpenWeatherMap**. A aplicação permite que o usuário consulte o clima de qualquer cidade, tratando e formatando os dados (temperatura, umidade, vento, etc.) antes de retorná-los.

## 3. Justificativa da Tecnologia
O **Node.js** foi escolhido por sua eficiência em lidar com requisições assíncronas, essencial ao consumir APIs de terceiros. A estrutura foi modularizada para facilitar a manutenção e garantir a separação de responsabilidades (MVC parcial).

## 4. Arquitetura e Organização
- **Controllers:** `WeatherController.js` gerencia as rotas e respostas HTTP.
- **Services:** `WeatherService.js` contém a lógica de integração com o Axios.
- **DTOs:** `WeatherDTO.js` filtra apenas as informações relevantes da API externa.
- **Config:** Gerenciamento de variáveis de ambiente com `dotenv`.

## 5. API Externa Utilizada
- **API:** OpenWeatherMap (https://openweathermap.org/api)
- **Finalidade:** Obter dados climáticos globais em tempo real.

## 6. Como Executar
1. Instale as dependências: `npm install`
2. Configure sua chave de API no arquivo `.env` (opcional, já incluída uma de teste).
3. Inicie o servidor: `node src/server.js`
4. Acesse: `GET http://localhost:3000/api/clima/{NOME_DA_CIDADE}`
   - Exemplo: `http://localhost:3000/api/clima/Belo Horizonte`

## 7. Evidências de Funcionamento
A API responde com um objeto JSON estruturado contendo cidade, país, temperatura, sensação térmica, descrição do clima, umidade e velocidade do vento. Erros como "Cidade não encontrada" são tratados e retornados com status HTTP adequado.
