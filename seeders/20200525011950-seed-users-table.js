'use strict';

let faker = require('faker');
let bcrypt = require('bcrypt');

module.exports = {
	up: (queryInterface, Sequelize) => {

		let users = [];

		for(let i = 0; i < 10; i++){

			users.push({
				email: faker.internet.email(),
				password: bcrypt.hashSync('secret', 10),
				createdAt: new Date(),
        updatedAt: new Date()
			});
		}

		return queryInterface.bulkInsert('users', users, {});
	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.bulkDelete('users', null, {})
	}
};
