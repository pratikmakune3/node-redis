"use strict";

const express = require("express");  
const fetch = require("node-fetch");
const redis = require("redis");

const app = express();
const PORT = process.env.PORT || 4000;
const PORT_REDIS = process.env.PORT || 6379;

const client = redis.createClient(PORT_REDIS);

const set = (key, value) => {
  client.set(key, JSON.stringify(value));
}

app.get("/spacex/launches", (req, res) => {  

  client.get('/spacex/launches', (err, data) => {
    if (err) res.status(400).send(err);
    if (data !== null) res.status(200).send(JSON.parse(data));
  });

  fetch("https://api.spacexdata.com/v3/launches/latest")
    .then(res => res.json())
    .then(json => { 
      set(req.route.path, json);
      res.status(200).send(json) 
    })
    .catch(error => {
      console.error(error);
      res.status(400).send(error);
    });
});

app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));