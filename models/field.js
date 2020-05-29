'use strict';
module.exports = (sequelize, DataTypes) => {
	const Field = sequelize.define('Field', {
		boundaries: DataTypes.STRING,
		status: DataTypes.STRING,
		progressPct: DataTypes.STRING,
		area: DataTypes.STRING,
		avgNDVI: DataTypes.STRING,
		priorAvgNDVI: DataTypes.STRING,
		photo: DataTypes.STRING,
		fieldGroupId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER
	}, {});
	Field.associate = function(models) {
		Field.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
		Field.belongsTo(models.FieldGroup, {foreignKey: 'fieldGroupId', as: 'fieldGroup'});
		Field.hasMany(models.FieldRotation, {foreignKey: 'fieldId', as: 'fieldRotations'});
		Field.hasMany(models.Zoning, {foreignKey: 'fieldId', as: 'zonings'});
		Field.hasMany(models.Zone, {foreignKey: 'fieldId', as: 'zone'});
		Field.hasMany(models.Analytic, {foreignKey: 'fieldId', as: 'analytics'});
		Field.hasMany(models.ScoutingNote, {foreignKey: 'fieldId', as: 'scoutingNotes'});
		Field.hasMany(models.SharedUserFile, {foreignKey: 'fieldId', as: 'shareds'});
	};
	return Field;
};
