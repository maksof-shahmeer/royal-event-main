const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get(`/api/currencies`, async (req, res) => {
    try {
      const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=4E0VK7BnkdeUuh1vegAt808v2IUjzUR6lxcvBMT2`);
      const data = await response.data;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch currencies' });
    }
  });
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;