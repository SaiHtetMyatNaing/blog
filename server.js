const express = require("express");

const app = express();
const route = require("./routes/route");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan"); 
const port = 3000;

// Set Ejs as view engine
app.set("view engine", "ejs");
// // Set the layout file as layouts/layout.ejs
app.set("layout", "layout/main"); 
// Set the views directory
app.set('views', 'views');
// Use express layouts as middleware
app.use(expressLayouts);

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static("views"));


app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
