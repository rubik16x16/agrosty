'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('zones', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			sinceIndexValue: {
				allowNull: false,
				type: Sequelize.STRING
			},
			untilIndexValue: {
				allowNull: false,
				type: Sequelize.STRING
			},
			color: {
				allowNull: false,
				type: Sequelize.STRING
			},
			area: {
				allowNull: false,
				type: Sequelize.STRING
			},
			zoningId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'zonings',
					key: 'id'
				},
				allowNull: false
			},
			fieldId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'fields',
					key: 'id'
				},
				allowNull: false
			},
			rotationId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'rotations',
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
		return queryInterface.dropTable('zones');
	}
};
