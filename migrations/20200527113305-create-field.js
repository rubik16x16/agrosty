'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('fields', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			boundaries: {
				allowNull: false,
				type: Sequelize.STRING
			},
			status: {
				allowNull: false,
				type: Sequelize.STRING
			},
			progressPct: {
				allowNull: false,
				type: Sequelize.STRING
			},
			area: {
				allowNull: false,
				type: Sequelize.STRING
			},
			avgNDVI: {
				allowNull: false,
				type: Sequelize.STRING
			},
			priorAvgNDVI: {
				allowNull: false,
				type: Sequelize.STRING
			},
			photo: {
				allowNull: false,
				type: Sequelize.STRING
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				allowNull: false
			},
			fieldGroupId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'field_groups',
					key: 'id'
				},
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('fields');
	}
};
