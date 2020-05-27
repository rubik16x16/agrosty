'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserLog = sequelize.define('UserLog', {
		date: DataTypes.DATE,
		type: DataTypes.STRING,
		content: DataTypes.STRING
	}, {});
	UserLog.associate = function(models) {
		UserLog.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
	};
	return UserLog;
};
