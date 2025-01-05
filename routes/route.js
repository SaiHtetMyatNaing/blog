const express = require("express");

const router = express.Router();
const Blog   = require('../models/blog');

router.get("/", (req, res) => {
  try {
    res.render("home");
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

router.get('/blog', async (req, res) => {
   try{
      const blog = await Blog.find();
      res.json(blog);
   }catch(err){
      res.status(500).send('Server error');
   }
});

module.exports = router;
