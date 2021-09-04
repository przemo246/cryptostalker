const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const { default: axios } = require("axios");

exports.news = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { from, to } = request.query;
    const config = {
      headers: {
        "X-Api-Key": functions.config().news.key,
      },
    };
    axios
      .get(
        `https://newsapi.org/v2/everything?q=crypto&from=${from}&to=${to}&sortBy=popularity`,
        config
      )
      .then((res) => {
        response.send(res.data);
      })
      .catch((error) => {
        response.sendStatus(error);
      });
  });
});
