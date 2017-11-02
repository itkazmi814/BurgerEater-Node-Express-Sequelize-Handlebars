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

	//Tested this path using curl. Did not update the handlebars file to accomodate for entering an "eater" or displaying their name
	app.put("/update", (req, res) => {
		console.log("UPDATE ==================");
		// console.log(req.body);
		db.Customer
			.findAll({
				where: { name: req.body.customer_name }
			})
			.then(result => {
				//If the customer DNE
				if (result.length === 0) {
					db.Customer.create({
						name: req.body.customer_name
					});
				}
			})
			.then(() => {
				db.Burger.update(
					{
						devoured: true
					},
					{
						where: { id: req.body.burger_id }
					}
				);
			})
			.then(() => res.redirect("/"));
	});
}

module.exports = routeListeners;
