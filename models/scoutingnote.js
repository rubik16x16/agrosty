'use strict';
module.exports = (sequelize, DataTypes) => {
	const ScoutingNote = sequelize.define('ScoutingNote', {
		date: DataTypes.DATE,
		position: DataTypes.DATE,
		description: DataTypes.DATE,
		photo: DataTypes.DATE,
	}, {});
	ScoutingNote.associate = function(models) {
		ScoutingNote.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
		ScoutingNote.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
		ScoutingNote.belongsTo(models.Rotation, {foreignKey: 'rotationId', as: 'rotation'});
	};
	return ScoutingNote;
};
