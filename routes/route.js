const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const User = require("../models/User");
const limitString = require("../helper/limitString");
const bcrypt = require("bcrypt");
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/blog", async (req, res) => {
  const data = await Blog.find();
  try {
    res.render("blog", { data, limitString });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/blog/:id", async (req, res) => {
  const data = await Blog.findById(req.params.id);
  try {
    res.render("blog-post", { data });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/log-in", (req, res) => {
  try {
    res.render("log-in");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!user) {
      return res.status(400).send("User not found");
    }

    if (passwordMatch) {
      res.redirect("/");
    } else {
      return res.status(400).send("Invalid password");
    }
  } catch (error) {
    return res.status(500).send("An error occur");
  }
});

router.get("/register", (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.findOne({ email });

    if (user === email) {
      return res.status(400).send("User already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await User.create({ email, password: hashPassword });
    res.send("User created successfully");
  } catch (error) {
    res.status(500).send("An error occur");
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
