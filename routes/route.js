const express = require("express");
const router = express.Router();
const Blog   = require('../models/blog');
const limitString = require('../helper/limitString');

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get('/blog' , async (req , res) => {
  const data = await Blog.find();
  try {
    res.render('blog' , {data , limitString});
  }catch (error) {
    res.status(500).send("Server error");
  }
})

router.get('/blog/:id' , async (req , res) => {
  const data = await Blog.findById(req.params.id);
  try {
    res.render('blog-post' , {data});
  }catch (error) {
    res.status(500).send("Server error");
  }
})

router.get("/about", (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
