'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('shared_user_files', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			accessType: {
				allowNull: false,
				type: Sequelize.STRING
			},
			accessGrantedDt: {
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
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
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
		return queryInterface.dropTable('shared_user_files');
	}
};
