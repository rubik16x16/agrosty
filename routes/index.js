let express = require('express');
let router = express.Router();
let db = require('../models');
let jwt = require('express-jwt');

let authController = require('../controllers/auth');
let producersController = require('../controllers/producers');
let fieldsController = require('../controllers/fields');

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

router.get('/producers', producersController.index);
router.get('/fields', fieldsController.index);
router.post('/fields', fieldsController.store);
router.get('/fields/:id', fieldsController.view);
router.put('/fields/:id', fieldsController.update);
router.delete('/fields/:id', fieldsController.destroy);


module.exports = router;
