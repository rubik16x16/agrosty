'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('analytics', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			date: {
				allowNull: false,
				type: Sequelize.DATE
			},
			cdIndex: {
				allowNull: false,
				type: Sequelize.DATE
			},
			value: {
				allowNull: false,
				type: Sequelize.DATE
			},
			fieldId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'fields',
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
		return queryInterface.dropTable('analytics');
	}
};
