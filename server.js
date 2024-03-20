const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

axios.defaults.headers.common["x-cg-demo-api-key"] = "CG-MgoGspKfTN9XtQ6UtWXTFdmR";

// Rota para buscar as top 10 criptomoedas por capitalização de mercado
app.get("/coins/markets", async (req, res) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados da API" });
  }
});

// Rota para buscar criptomoeda por id
app.get("/coins/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar detalhes da moeda" });
  }
});

// Rota para buscar os dados para o gráfico
app.get("/coins/:id/market_chart", async (req, res) => {
  const { id } = req.params;
  const days = req.query.days || 7; // Padrão para 7 dias se não especificado
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=brl&days=${days}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar gráfico de preços da moeda" });
  }
});

// Rota para buscar criptomoedas em alta
app.get("/search/trending", async (req, res) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados da API" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));