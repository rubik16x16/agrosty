var express = require('express');
var router = express.Router();
let db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

	db.User.findAll().then(users => {

		res.json(users);
	});
});

module.exports = router;
