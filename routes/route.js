const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.render('home');
  } catch (error) {      
    res.status(500).send('Server error');
  }
});


router.get('/about', (req, res) => {
  try {
    res.render('about');
  } catch (error) {      
    res.status(500).send('Server error');
  }
});



module.exports = router;