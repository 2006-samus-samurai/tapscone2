const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../models')
module.exports = router
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GOOGLE_CALLBACK} = require('../../secrets')


const verificationCallback = async (accessToken, refreshToken, profile, done) => {
    try {
      const [user] = await User.findOrCreate({
        where: {
          googleId: profile.id
        },
        defaults: {
          email: profile.emails[0].value,
          imageUrl: profile.photos[0].value
        }
      })
      done(null, user)
    } catch (error) {
      done(error)
    }
  }

const strategy = new GoogleStrategy({
     clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callUrl: GOOGLE_CALLBACK
  }, verificationCallback)

passport.use(strategy)

router.get('/', passport.authenticate('google', 
    {scope: ['email', 'profile']}
  ))
  
  router.get('/callback', passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/'
  }))