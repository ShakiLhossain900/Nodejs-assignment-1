// const express = require("express");
// const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

// const app = express();

// const users = [];

// app.engine("hbs", expressHbs({ defaultLayout: "main-layout", extname: "hbs" }));
// app.set("view engine", "hbs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false })); //it will help income data for us

// app.get("/", (req, res, next) => {
//   res.render("index", { pageTitle: "Add User" }); //users:users array er output
// });

// app.get("/users", (req, res, next) => {
//   res.render("users", {
//     pageTitle: "User",
//     users: users,
//     hasUsers: users.length > 0,
//   }); //here will be users.pug file and for this file i also send the pageTitle aslo
// });

// app.post("/add-user", (req, res, next) => {
//   users.push({ name: req.body.username });
//   res.redirect("/users");
// });

// app.listen(3000);

// work with ejs
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

const users = [];
app.engine(
  "handlebars",
  expressHbs.engine({
    layoutsDir: "views/", // directory to handlebars files
    defaultLayout: null,
    extname: "handlebars",
  })
);
app.set("view engine", "ejs");
app.set("views", "views"); // optional

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(3000);



//DONE 
