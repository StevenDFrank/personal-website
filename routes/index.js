var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Steve\'s Site'});
});

router.get('/gallery', function(req, res) {
  let gallery = req.query.gallery;
  res.render('gallery', { gal: gallery});
});

router.get('/gal', function(req, res) {
    res.render('gal');
});

module.exports = router;
