const router = require('express').Router()
module.exports = router
const {UserJob, Job} = require('../db/models')



//Get all job items from a user  ROUTE /api/userjobs/userId
router.get('/:userId', async (req, res, next) => {
  try {
    //pulling what we have saved under user
    const userJobs = await UserJob.findAll({
      where: {
        userId: req.params.userId,
      },
      include: [
        {
          model: Job,
          required: false,
          attributes: ['jobId', 'company', 'url', 'location','title','description']
        }
      ]
    })
    res.json( userJobs || []) //results are in an array
  } catch (error) {
    next(error)
  }
})

//retrieve a single job      ROUTE /api/userjobs/:userId/:jobId
router.get('/:userId/:jobId', async (req, res, next) => {
  try {
    const singleJob = await UserJob.findOne({
      where: {
        userId: req.params.userId,

      },
      include: [
        {
          model: Job, where: {jobId: req.params.jobId},
          required: false,
          attributes: ['jobId', 'company', 'url', 'location','title','description']
        }
      ]
    })
    res.send(singleJob)
  } catch (error) {
    next(error)
  }
})

//delete an job from userjobs   /api/userjobs/:userId/:jobId
router.delete('/:userId/:jobId', async (req, res, next) => {
  try {
    await UserJob.destroy({
      where: {
        userId: req.params.userId,
        jobId: req.params.jobId
      }
    })
    res.sendStatus(204).end()
  } catch (error) {
    next(error)
  }
})

//add job to the userjobs    /api/userjobs/:userId/:jobId/add
router.post('/:userId/:jobId/add', async (req, res, next) => {
    try {
      const [newJob] = await UserJob.findOrCreate({
        where: {
          userId: Number(req.params.userId),
          jobId: Number(req.params.jobId)
        }
      })
      res.send(newJob)
    } catch (error) {
      next(error)
    }
  }
)

//PUT route to update a job  ROUTE api/userjobs/:userId/:jobId
//update status // update activity/note ??

router.put('/:userId/:jobId', async (req, res, next) => {
    try {
      const updateJob = await UserJob.findOne({
        where: {
          userId: req.params.userId,

        },
        include: [
          {
            model: Job, where: {jobId: req.params.jobId},
            required: false
          }
        ]
      })

    //to be completed 
      res.send(updateJob)
    } catch (error) {
      next(error)
    }
  }
)
