const router = require('express').Router()
module.exports = router

router.use('/userjobs', require('./userjobs'))
router.use('/jobs', require('./jobs'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
