const router = require("express").Router();
const Job = require("../db/models/job");
const axios = require("axios");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = router;

//GET route for job list         ROUTE /api/jobs
router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    next(error);
  }
});

//GET route for a single job      ROUTE /api/jobs/jobId
router.get("/:jobId", async (req, res, next) => {
  try {
    const currentJob = await Job.findByPk(req.params.jobId);
    res.json(currentJob);
  } catch (error) {
    next(error);
  }
});

//GET route for search bar query ROUTE /api/jobs/ * see comments
router.get("/", async (req, res, next) => {
  //do we need a ? in the route
  try {
    const searchValue = req.query.search;
    if (searchValue.length) {
      const jobs = await Job.findAll({
        where: {
          title: { [Op.like]: "%" + searchValue + "%" },
          description: { [Op.like]: "%" + searchValue + "%" },
        },
      });
      res.json(jobs);
    } else {
      res.status(404).send({ message: "No jobs found with that criteria" });
    }
  } catch (error) {
    next(error);
  }
});

//POST route to add all new jobs to the db     ROUTE /api/jobs

//make a call to the api ONCE A DAY ? & save NEW jobs into the database
router.post("/", async (req, res, next) => {
  try {
    const jobsFromApi = await getApiData();
    await Job.findOrCreate({
      where: {
        jobId: jobsFromApi.id,
        company: jobsFromApi.company,
        url: jobsFromApi.url,
        location: jobsFromApi.location,
        title: jobsFromApi.title,
        description: jobsFromApi.description, //html format
      },
    });
    res.status(204).send({ message: "Jobs saved in the database" });
  } catch (error) {
    next(error);
  }
});

//Utils

// this function makes the call to the GITHUB JOBS API
const getApiData = async () => {
  const res = await axios.get("https://jobs.github.com/positions.json");
  return res;
};

//write a function that converts html description into string??

/*
 *for the search bar
  <form action="/request/search" method="GET">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for positions"
              class="search"
            />
            <button className="search-btn" type="submit">Submit</button>
        <div class="imae"></div>
      </form>
      */
