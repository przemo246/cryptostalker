const express = require("express");
require("dotenv").config({ path: ".env" });
const axios = require("axios");
const cors = require("cors")({ origin: true });
const compression = require("compression");
const app = express();
app.use(compression());
const port = 3001;

app.get("/get-news/:from/:to", (req, res) => {
  cors(req, res, () => {
    const { from, to } = req.params;
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&q=cryptocurrency%20OR%20cryptocurrencies%20OR%20crypto&language=en&from_date=${from}&to_date=${to}`
      )
      .then((dataResponse) => {
        res.status(200).send(dataResponse.data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
});

app.listen(port, () => {
  console.log("App listening on port " + port + ".");
});
