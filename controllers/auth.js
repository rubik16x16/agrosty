const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {

	db.User.create({
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10)
	}).then(user => {

		res.status(201);
		res.json('Hi world!');
	});
}

exports.login = async (req, res) => {

	let user = null;

	await db.User.findOne({
		where: {
			email: req.body.email
		}
	}).then(query => {

		user = query;
	});

	if(user !== null){

		let valid = false;

		await bcrypt.compare(req.body.password, user.password).then(result => {

			valid = result;
		});

		if(valid){

			return res.send(jwt.sign({ email: user.email }, 'shhhhh'));
		}
	}

	res.status(400);
	return res.json({
		error: 'User or password invalid'
	});
}
