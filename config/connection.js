var mysql = require("mysql");

//create database connection
if(process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
	console.log("Connected to JAWS")
} else {
	var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "",
		database: "burgers_db"
	});
	console.log("Connected to mySQL")
}

connection.connect( err => {
	if(err) throw err;
})

module.exports = connection;