'use strict';

let faker = require('faker');

module.exports = {
	up: (queryInterface, Sequelize) => {

		let producers = [];

		for(let i = 0; i < 10; i++){

			producers.push({
				name: faker.lorem.word(),
				createdAt: new Date(),
        updatedAt: new Date()
			});
		}

		return queryInterface.bulkInsert('producers', producers, {});
	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.bulkDelete('producers', null, {});
	}
};
