const router = require('express').Router()
module.exports = router

router.use('/userjobs', require('./userjobs'))
router.use('/jobs', require('./jobs'))

// router.use((req, res, next) => {
//   const error = new Error('WHY AM I HERE')
//   error.status = 404
//   next(error)
// })

