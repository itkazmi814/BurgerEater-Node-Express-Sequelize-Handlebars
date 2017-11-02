var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ encoded: false, extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

///Import and call api route listeners
var routeListeners = require("./controllers/burgers_controller.js");
routeListeners(app);

db.sequelize.sync().then(() => {
	app.listen(port, () => console.log("Listening on PORT " + port));
});
