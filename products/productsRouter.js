// importing express
const express = require("express");

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles url's that begin with /products
// GET to /products
router.get("/", (request, response) => {
  response.send("get to /products");
});

// GET to /products/:id
router.get("/:id", (request, response) => {
  const { id } = request.params;
  response.send(`get to /products/${id}`);
});

// exporting router
module.exports = router;
