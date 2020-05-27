'use strict';
module.exports = (sequelize, DataTypes) => {
	const Rotation = sequelize.define('Rotation', {
		name: DataTypes.STRING,
		sinceDt: DataTypes.STRING,
		untilDt: DataTypes.STRING
	}, {});
	Rotation.associate = function(models) {
		Rotation.hasMany(models.FieldRotation, {foreignKey: 'rotationId', as: 'fieldRotations'});
		Rotation.hasMany(models.Zoning, {foreignKey: 'rotationId', as: 'zonings'});
		Rotation.hasMany(models.Zone, {foreignKey: 'rotationId', as: 'zones'});
		Rotation.hasMany(models.ScountingNote, {foreignKey: 'rotationId', as: 'scoutingNotes'});
	};
	return Rotation;
};
