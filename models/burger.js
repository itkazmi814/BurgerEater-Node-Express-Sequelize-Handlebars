module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("burger", {
		burger_name: DataTypes.STRING,
		devoured: {type: DataTypes.BOOLEAN, defaultValue: true},
		date: DataTypes.DATE
	});
	return Burger;
}