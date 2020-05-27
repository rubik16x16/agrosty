'use strict';

let db = require('../models');
let faker = require('faker');

module.exports = {
	async up(queryInterface, Sequelize){

		await db.Producer.findAll({limit: 5}).then(producers => {

			let fieldGroups = [];
			producers.forEach(producer => {

				fieldGroups.push({
					name: faker.lorem.word(),
					producerId: producer.id,
					createdAt: new Date(),
					updatedAt: new Date()
				});
			});

			return queryInterface.bulkInsert('field_groups', fieldGroups, {});
		});
	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.bulkDelete('producers', null, {});
	}
};
