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


router.post('/contact-us/form/work-for-nhs-answer', (req, res) => {
    var workNHS = req.session.data['workNHS'];
    if (workNHS === 'yes') {
      res.redirect('/contact-us/form/nhs-organisation');
    } else {
      res.redirect('/contact-us/form/give-feedback');
    }
  });

  router.post('/contact-us-2/form/why-contact-answer', (req, res) => {
    var whyContact = req.session.data['whyContact'];
    if (whyContact === 'details') {
      res.redirect('/contact-us-2/form/what-are-your-contact-details');
    } else {
      res.redirect('/contact-us-2/form/sorry-the-website-team-can-only-help-with-the-nhs-website');
    }
  });




// contact-us-2-alternative

  router.post('/contact-us-2-alternative/form/why-contact-answer', (req, res) => {
    var whyContact = req.session.data['whyContact'];
    if (whyContact === 'details') {
      res.redirect('/contact-us-2-alternative/form/what-are-your-contact-details');
    } else {
      res.redirect('/contact-us-2-alternative/form/sorry-the-website-team-can-only-help-with-the-nhs-website');
    }
  });



// contact-us-3

  router.post('/contact-us-3/form/why-contact-answer', (req, res) => {
    var whyContact = req.session.data['whyContact'];
    if (whyContact === 'details') {
      res.redirect('/contact-us-3/form/what-are-your-contact-details');
    } else {
      res.redirect('/contact-us-3/form/sorry-the-website-team-can-only-help-with-the-nhs-website-c');
    }
  });

  router.post('/contact-us-3/form/what-topic-do-you-need-help-with', (req, res) => {
    var whyContact = req.session.data['whyContact'];
    if (whyContact === 'book-change-cancel-appointment') {
      res.redirect('../book-cancel-appointment');
    } 
    if (whyContact === 'give-feedback-or-complaint') {
      res.redirect('../give-feedback-or-complain');
    } 
    if (whyContact === 'get-medical-help') {
      res.redirect('../get-medical-help');
    } 
    if (whyContact === 'contact-nhs-app') {
      res.redirect('https://www.nhs.uk/contact-us/nhs-app-contact-us');
    } 
    if (whyContact === 'contact-nhs-login-support') {
      res.redirect('https://help.login.nhs.uk/contact');

    } else {
      res.redirect('');
    }
  });


 
  // contact-us-4

  // Branching
  router.post('/contact-us-4/i-want-to-make-a-suggestion-about-the-nhs-website/do-you-want-a-response-about-the-outcome-of-your-suggestion', (req, res) => {
    // Make a variable and give it the value from 'know-nhs-number'
    var contectYesNo = req.session.data['contectYesNo'];

    // Check whether the variable matches a condition
    if (contectYesNo === 'yes-contactMe') {
      // Send user to provide contact details page
      res.redirect('check-your-answers');
    } else {
      // Send user to check your answers (skip contact details page)
      res.redirect('check-your-answers2');
    }
  });



  router.post('/contact-us-4/i-want-to-report-a-mistake-on-the-nhs-website/do-you-want-a-response-about-the-outcome-of-your-feedback', (req, res) => {
    // Make a variable and give it the value from 'know-nhs-number'
    var contectYesNo = req.session.data['contectYesNo'];

    // Check whether the variable matches a condition
    if (contectYesNo === 'yes-contactMe') {
      // Send user to provide contact details page
      res.redirect('check-your-answers');
    } else {
      // Send user to check your answers (skip contact details page)
      res.redirect('check-your-answers2');
    }
  });




