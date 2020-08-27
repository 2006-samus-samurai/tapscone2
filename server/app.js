const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const session = require('express-session')
const passport = require('passport')


//logging middleware
app.use(morgan("dev")); 

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Session middleware
app.use(session({
  secret: 'This is not a very secure secret...',
  resave: false,
  saveUninitialized: false
}))

// consumes 'req.session' so that passport can know what's on the session
app.use(passport.initialize())

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session())

//Static Middleware
app.use(express.static(path.join(__dirname, "./public"))); //

// authentication router
app.use('/auth', require('./auth/oauthroutes'))

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})


// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

app.use(express.json());

module.exports = app;



