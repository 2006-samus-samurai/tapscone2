const Sequelize = require("sequelize");
const db = require("./db")

const UserJob = db.define("userjobs", {
  notes:{
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM("apply", "applied", "interview", "rejected","offer"),
    allowNull: false
  },
  contacts: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserJob



