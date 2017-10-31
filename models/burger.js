var orm = require("../config/orm.js")

burger = {
	selectAll: function (callback) {
		orm.selectAll(callback);
	},

	insertOne: function (newBurger, callback) {
		orm.insertOne(newBurger, callback);
	},

	updateOne: function (id, callback) {
		orm.updateOne(id, callback);
	}
}

module.exports = burger;