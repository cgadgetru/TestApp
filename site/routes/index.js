var express = require('express');
var router = express.Router();
var generateFakePersons = require('../faker');

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/index.html');
});
router.get('/persons', function(req, res) {
    res.send(generateFakePersons(300));
});

module.exports = router;
