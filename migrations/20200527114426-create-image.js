'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('images', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			processed_tif_url: {
				allowNull: false,
				type: Sequelize.STRING
			},
			sateliteName: {
				allowNull: false,
				type: Sequelize.STRING
			},
			acquisitionDt: {
				allowNull: false,
				type: Sequelize.STRING
			},
			cloudCover: {
				allowNull: false,
				type: Sequelize.STRING
			},
			r: {
				allowNull: false,
				type: Sequelize.STRING
			},
			g: {
				allowNull: false,
				type: Sequelize.STRING
			},
			b: {
				allowNull: false,
				type: Sequelize.STRING
			},
			excludeind: {
				allowNull: false,
				type: Sequelize.STRING
			},
			dumpScreen: {
				allowNull: false,
				type: Sequelize.STRING
			},
			histogram: {
				allowNull: false,
				type: Sequelize.STRING
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
		return queryInterface.dropTable('images');
	}
};
