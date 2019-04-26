const express = require("express");
const router = express.Router();

router.use("/product", require("./api/productRoutes"));

//add more api routes here

module.exports = router; 