'use strict';
module.exports = (sequelize, DataTypes) => {
	const FieldGroup = sequelize.define('FieldGroup', {
		name: DataTypes.STRING
	}, {
		tableName: 'field_groups'
	});
	FieldGroup.associate = function(models) {
		FieldGroup.belongsTo(models.Producer, {foreignKey: 'producerId', as: 'producer'});
		FieldGroup.hasMany(models.Field, {foreignKey: 'fieldGroupId', as: 'fields'});
	};
	return FieldGroup;
};
