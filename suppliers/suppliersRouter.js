// importing express
const express = require("express");

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles url's that begin with /suppliers
// GET to /suppliers
router.get("/", (request, response) => {
  response.send("get to /suppliers");
});

// GET to /suppliers/:name
router.get("/:name", (request, response) => {
  const { name } = request.params;
  response.send(`get to /suppliers/${name}`);
});

// exporting router
module.exports = router;
