var db = require("../models");

function routeListeners(app) {
	app.get("/", (req, res) => {
		console.log("GET ==================");
		db.Burger.findAll({}).then(result => {
			res.render("index", { burgerList: result });
		});
	});

	app.post("/create", (req, res) => {
		console.log("POST ==================");

		db.Burger
			.create({
				burger_name: req.body.burger_name
			})
			.then(() => {
				console.log("Created burger ", req.body.burger_name);
				res.redirect("/");
			});
	});

	app.put("/update", (req, res) => {
		console.log("UPDATE ==================");
		db.Burger
			.update(
				{
					devoured: true
				},
				{
					where: { id: req.body.id }
				}
			)
			.then(() => {
				console.log("Burger updated");
				res.redirect("/");
			});
	});
}

module.exports = routeListeners;
