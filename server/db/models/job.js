const Sequelize = require("sequelize");
const db = require("./db")

const Job = db.define("jobs", {
  id:{
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  type: {
  type: Sequelize.STRING,
  },
  url:{
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at:{
    type: Sequelize.STRING,
  },
  company:{
    type: Sequelize.STRING,
    allowNull: false
  },
  company_url:{
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Job
