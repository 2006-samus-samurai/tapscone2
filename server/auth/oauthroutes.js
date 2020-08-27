const router = require('express').Router()
const {User} = require('../../models')
module.exports = router

//auth 
router.post('/login', async (req, res, next) => {
    console.log('!!!!!!!!', req.body)
  try {
    const [user] = await User.findOrCreate({
        where: {googleId},
        defaults: {email, imgUrl, firstName, lastName, fullName}
      })
      res.json(req.body)
    } catch (error) {
        next(error)
    }
})
