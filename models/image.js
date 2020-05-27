'use strict';
module.exports = (sequelize, DataTypes) => {
	const Image = sequelize.define('Image', {
		processed_tif_url: DataTypes.STRING,
		sateliteName: DataTypes.STRING,
		acquisitionDt: DataTypes.STRING,
		cloudCover: DataTypes.STRING,
		r: DataTypes.STRING,
		g: DataTypes.STRING,
		b: DataTypes.STRING,
		excludeind: DataTypes.STRING,
		dumpScreen: DataTypes.STRING,
		histogram: DataTypes.STRING,
	}, {});
	Image.associate = function(models) {
		Image.hasMany(models.Zoning, {foreignKey: 'imageId', as: 'zonings'});
	};
	return Image;
};
