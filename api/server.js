// defines what the server can do

const express = require("express");

const productsRouter = require("../products/productsRouter.js");
const suppliersRouter = require("../suppliers/suppliersRouter.js");

const server = express();

// global middleware
server.use(express.json());

// use the productsRouter whenever you go to /products
server.use("/products", productsRouter);
// use the suppliersRouter whenever you go to /suppliers
server.use("/suppliers", suppliersRouter);

server.get("/", (request, response) => {
  response.status(200).json({ api: "up" });
});

module.exports = server;
