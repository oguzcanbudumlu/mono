const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);

  console.log("event", event);
  await axios.post("http://posts-clusterip-service:4000/events", event);
  await axios.post("http://comments-service:4001/events", event);
  await axios.post("http://query-service:4002/events", event);
  await axios.post("http://moderation-service:4003/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('v310')
  console.log("Listening on 4005");
});
