'use strict';
module.exports = (sequelize, DataTypes) => {
	const SharedUserFile = sequelize.define('SharedUserFile', {
		accessType: DataTypes.STRING,
		accessGrantedDt: DataTypes.STRING,
		userId: DataTypes.INTEGER,
		fiedId: DataTypes.INTEGER
	}, {});
	SharedUserFile.associate = function(models) {
		SharedUserFile.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
		SharedUserFile.belongsTo(models.Field, {foreignKey: 'fieldId', as: 'field'});
	};
	return SharedUserFile;
};
