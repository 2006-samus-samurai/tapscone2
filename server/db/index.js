const Sequelize = require('sequelize')
//const { Job, User } = require("./db");
const Job = require("./models/job")
const User = require("./models/user")

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/tapscone', {
  logging: false
})

//Associations
User.HasMany(Job)
Job.BelongsTo(User)


module.exports = db