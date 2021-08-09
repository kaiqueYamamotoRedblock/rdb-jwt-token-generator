const serverless = require("serverless-http");
const express = require("express");
const jwt = require('jsonwebtoken');
const faker = require('faker');
const app = express();


var token = jwt.sign({ name: faker.name.findName }, 'github.com');

app.get("/", (req, res, next) => {
  return res.status(200).json({
    token_jwt: token,
  });
});


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
