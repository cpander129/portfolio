/*
 * File: index.js
 * Author: Christopher Pander
 * Description: Routes for all the pages
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pander\'s Plays' });
});

/* GET about page */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Us'});
});

/* GET projects page */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

/* GET services page */
router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

/* GET contact page */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Us' });
});

//Make file public
module.exports = router;
