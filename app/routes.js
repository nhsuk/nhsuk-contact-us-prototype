// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;


router.post('/contact-us/form/why-contact-answer', (req, res) => {
    var whyContact = req.session.data['whyContact'];
    if (whyContact === 'details') {
      res.redirect('/contact-us/form/contact-details');
    } else {
      res.redirect('/contact-us/form/sorry');
    }
  });