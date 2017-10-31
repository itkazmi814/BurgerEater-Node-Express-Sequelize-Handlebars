var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({encoded: false, extended: true}));
app.use(bodyParser.json());
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

///Import api route listeners
var routeListeners = require("./controllers/burgers_controller.js");
//Call api route listeners
routeListeners(app);

app.listen(port);
