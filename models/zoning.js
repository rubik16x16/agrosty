'use strict';
module.exports = (sequelize, DataTypes) => {
	const Zoning = sequelize.define('Zoning', {
		outputimg: DataTypes.STRING
	}, {});
	Zoning.associate = function(models) {
		Zoning.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
		Zoning.belongsTo(models.Rotation, {foreignKey: 'rotationId', as: 'rotation'});
		Zoning.belongsTo(models.Image, {foreignKey: 'imageId', as: 'image'});
		Zoning.hasMany(models.Zone, {foreignKey: 'zoningId', as: 'zones'});
	};
	return Zoning;
};
