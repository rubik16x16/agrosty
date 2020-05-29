let express = require('express');
let router = express.Router();
let db = require('../models');
let authController = require('../controllers/auth');
var jwt = require('express-jwt');
/* GET home page. */
router.get('/', function(req, res) {

	db.User.findAll().then(users => {

		res.json(users);
	});
});

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected-route', jwt({ secret: 'shhhhh' }), (req, res) => {

	console.log(req.user);
	res.send('test');
});

module.exports = router;
