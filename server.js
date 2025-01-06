const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./routes/route");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = 3000;

require("dotenv").config();
const mongoDbUrl = process.env.MONGODB_URL;

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });    
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// Set Ejs as view engine
app.set("view engine", "ejs");
// // Set the layout file 
app.set("layout", "layout/main");
// Set the views directory
app.set("views", "views");
// Use express layouts as middleware
app.use(expressLayouts);
app.use(bodyParser.json() , bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static("views"));

app.use(express.json());
app.use(route);

