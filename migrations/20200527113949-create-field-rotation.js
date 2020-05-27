'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('field_rotations', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			cpCrop: {
				allowNull: false,
				type: Sequelize.STRING
			},
			hybrid: {
				allowNull: false,
				type: Sequelize.STRING
			},
			sowingDt: {
				allowNull: false,
				type: Sequelize.STRING
			},
			phenologicStage: {
				allowNull: false,
				type: Sequelize.STRING
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
		return queryInterface.dropTable('field_rotations');
	}
};
