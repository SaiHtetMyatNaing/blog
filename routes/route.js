const express = require("express");

const router = express.Router();
const Blog   = require('../models/blog');
const limitString = require('../helper/limitString');


router.get("/", async (req, res) => {
  const data = await Blog.find();
  try {
    res.render("home" , {data , limitString});
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/about", (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    res.status(500).send("Server error");
  }
});


module.exports = router;
