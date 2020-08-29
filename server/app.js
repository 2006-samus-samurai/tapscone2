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

app.use('/', require('./api'))

app.get('/', (req, res, next) => {
  console.log("INSIDE APP GET")
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// })

// app.get("/", function (req, res) {
//   res.redirect("/api/jobs/");
// });



module.exports = app;
