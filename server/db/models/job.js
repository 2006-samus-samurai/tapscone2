const Sequelize = require('sequelize')
const db = require('../index')

const Job = db.define('jobs', {
  
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
} ,
contacts: {
  type: Sequelize.STRING, 
  allowNull: false
}
})

module.exports = Job
