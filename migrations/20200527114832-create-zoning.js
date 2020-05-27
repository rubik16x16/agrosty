'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('zonings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			outputimg: {
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
			imageId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'images',
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
		return queryInterface.dropTable('zonings');
	}
};
