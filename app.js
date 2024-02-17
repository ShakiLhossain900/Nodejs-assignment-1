const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const users = [];

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false})); //it will help income data for us

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" }); //users:users array er output
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User" , users: users}); //here will be users.pug file and for this file i also send the pageTitle aslo
});

app.post("/add-user", (req, res, next) => {
  users.push({name: req.body.username});
  res.redirect("/users");
});

app.listen(3000);
