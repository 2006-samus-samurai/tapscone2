const Sequelize = require("sequelize");
const db = require("./db")

const Job = db.define("jobs", {
  jobTitle:{
    type: Sequelize.STRING,
    allowNull: false
  },
  jobPostUrl:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Job
