'use strict';
module.exports = (sequelize, DataTypes) => {
	const Producer = sequelize.define('Producer', {
		name: DataTypes.STRING
	}, {
		tableName: 'producers'
	});
	Producer.associate = function(models) {
		Producer.hasMany(models.FieldGroup, {foreignKey: 'producerId', as: 'fieldGroups'});
	};
	return Producer;
};
