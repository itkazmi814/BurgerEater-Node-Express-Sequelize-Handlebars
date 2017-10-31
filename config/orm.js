var connection = require("./connection.js");

var orm = {
	selectAll: function(callback) {
		console.log("Entering function selectAll");
		connection.query("SELECT * FROM burgers", (err, res) => {
			if(err) throw err;
			callback(res);
		});
	},

	insertOne: function(newBurger, callback) {
		console.log("Entering function insertOne");
		connection.query("INSERT INTO burgers SET ?", newBurger, (err, res) => {
			if(err) throw err;
			callback();
		});
	},

	updateOne: function(id, callback) {
		console.log("Entering function updateOne");
		connection.query("UPDATE burgers SET devoured = true WHERE id = ?", id, (err, res) => {
			if(err) throw err;
			callback();
		});
	}
}

module.exports = orm;