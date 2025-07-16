const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/predict', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur côté IA" });
  }
});

app.listen(3001, () => console.log('Express backend running on port 3001'));
