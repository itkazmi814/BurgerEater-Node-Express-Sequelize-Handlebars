module.exports = (sequelize, DataTypes) => {
	var Burger = sequelize.define(
		"Burger",
		{
			burger_name: {
				type: DataTypes.STRING
			},
			devoured: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			eaten_by: {
				type: DataTypes.STRING,
				allowNull: true
			},
			date: {
				type: DataTypes.DATE
			}
		},
		{
			timestamps: false
		}
	);

	Burger.associate = parentTable => {
		Burger.belongsTo(parentTable.Customer, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Burger;
};
