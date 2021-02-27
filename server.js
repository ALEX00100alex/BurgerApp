const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;

var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});