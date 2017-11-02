module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define(
		"Customer",
		{
			name: DataTypes.STRING
		},
		{
			timestamps: false
		}
	);

	Customer.associate = childTable => {
		Customer.hasMany(childTable.Burger);
	};

	return Customer;
};
