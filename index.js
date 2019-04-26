// Load modules //
const express = require("express");
const app = express();
const cors = require("cors"); 
const bodyParser = require("body-parser");
const router = require("./app/routes/router");

// Database Configuration //
const database = require('.app/config/dbconfig');

// init database
database.init();

// express config

// const port = process.argv[2] || 3000;
app.listen(8000, function () {
    console.log("Server listening on port:" + 8000);
    
});

app.use(cors());
app.use(bodyParser.urlcoded({extended:false}));
app.use(bodyParser.json());


// router config
app.use("/api, router");