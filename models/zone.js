'use strict';
module.exports = (sequelize, DataTypes) => {
	const Zone = sequelize.define('Zone', {
		sinceIndexValue: DataTypes.STRING,
		untilIndexValue: DataTypes.STRING,
		color: DataTypes.STRING,
		area: DataTypes.STRING,
		zoningId: DataTypes.INTEGER,
		fieldId: DataTypes.INTEGER,
		rotationId: DataTypes.INTEGER
	}, {});
	Zone.associate = function(models) {
		Zone.belongsTo(models.Zoning, {foreignKey: 'zoningId', as: 'user'});
		Zone.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
		Zone.belongsTo(models.Rotation, {foreignKey: 'rotationId', as: 'rotation'});
	};
	return Zone;
};
