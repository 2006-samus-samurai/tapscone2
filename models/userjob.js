const Sequelize = require("sequelize");
const db = require("./db")

const UserJob = db.define("userjobs", {
  company:{
    type: Sequelize.STRING,
    allowNull: false
  },
  jobTitle:{
    type: Sequelize.STRING,
    allowNull: false
  },
  jobNotes:{
    type: Sequelize.TEXT,
  },
  jobPostUrl:{
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("apply", "phone interview", "interview", "rejected","accepted"),
    allowNull: false
  },
  deadline:{
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  contacts: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserJob

//where should we save all jobs information from the api, user or userjobs?
//if we're saving just title in the jobs, and the rest inthe jobs user, where are we gonna pull from for the front end? alw userjobs?

