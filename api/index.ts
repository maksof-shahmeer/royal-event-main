const express = require("express");
const app = express()
const axios = require('axios')
const cors = require('cors')

const corsOptions = {
    origin: '*',
  };
  app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get(`/api/currencies`, async (req, res) => {
    try {
      const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_v6nMdL7IHOxmQ8gglpalVdKSinmQG0HiOwMCbyUY`);
      const data = await response.data;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch currencies' });
    }
  });
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;