const express = require("express");
const router = express.Router();

// controller here
const ProductController = require("../../controller/productController");
const productController = new ProductController();

// student routes
router.get("/", function (req, res) {
    productController.findAll(res);
    // res.send([{hello:"world"}]);
});

module.exports = router;