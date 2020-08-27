const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

//api routes
app.use('/api', require('./api'))



// app.get("/", function (req, res) {
//   res.redirect("/jobs/");
// });



module.exports = app;
