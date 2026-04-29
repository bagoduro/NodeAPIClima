const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rotas
app.use('/api/clima', weatherRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.json({ 
        message: 'API de Clima está rodando!',
        endpoint: '/api/clima/:cidade'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de Clima rodando na porta ${PORT}`);
});
