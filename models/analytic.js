'use strict';
module.exports = (sequelize, DataTypes) => {
	const Analytic = sequelize.define('Analytic', {
		date: DataTypes.DATE,
		cdIndex: DataTypes.STRING,
		value: DataTypes.STRING,
		fieldId: DataTypes.INTEGER
	}, {});
	Analytic.associate = function(models) {
		Analytic.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
	};
	return Analytic;
};
