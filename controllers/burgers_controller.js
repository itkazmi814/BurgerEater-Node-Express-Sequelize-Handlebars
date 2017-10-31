var express = require("express");
var burger = require("../models/burger.js");

function routeListeners (app) {
	app.get("/", (req, res) => {
		burger.selectAll( (result) => {
			console.log("Rendering handlebars for GET route");
			res.render("index",{burgerList: result});
		});
	});

	app.post("/create", (req, res) => {
		console.log("POST,", req.body)
		burger.insertOne(req.body, () => {
			console.log("Rendering handlebars for POST route");
			res.redirect("/")
		});
	});

	app.put("/update", (req, res) => {
		var id = parseInt(req.body.burger_id)
		burger.updateOne(id, () => {
			console.log("Rendering handlebars for PUT route");
			res.redirect("/")
		});
	});
}

module.exports = routeListeners;