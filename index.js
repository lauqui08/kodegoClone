const express = require("express");
const { join } = require("node:path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(express.static(join(__dirname, "node_modules", "bootstrap", "dist")));
app.use(
  express.static(join(__dirname, "node_modules", "bootstrap-icons", "font"))
);
app.use(express.static("./public"));

//template engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./pages/index");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080);
