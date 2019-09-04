// defines what the server can do

const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.status(200).json({ api: "up" });
});



module.exports = server; 