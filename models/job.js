const Sequelize = require("sequelize");
const db = require("./db")

const Job = db.define("jobs", {
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
  deadline:{
    type: Sequelize.DATEONLY,
    allowNull: false
  },
});

module.exports = Job
