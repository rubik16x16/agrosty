'use strict';
module.exports = (sequelize, DataTypes) => {
	const FieldRotation = sequelize.define('FieldRotation', {
		cpCrop: DataTypes.STRING,
		hybrid: DataTypes.STRING,
		sowingDt: DataTypes.STRING,
		phenologicStage: DataTypes.STRING
	}, {});
	FieldRotation.associate = function(models) {
		FieldRotation.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
		FieldRotation.belongsTo(models.Rotation, {foreignKey: 'rotationId', as: 'rotation'});
	};
	return FieldRotation;
};
