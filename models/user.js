const Sequelize = require('sequelize')
const db = require('../models/db')

const User = db.define('users', {
  username: {
  type: Sequelize.STRING,
  },
  email: {
  type: Sequelize.STRING,
  unique: true,
  allowNull: false
  },
  googleId: {
    type: Sequelize.STRING
  },
  imageURL: {
  type: Sequelize.TEXT,
  defaultValue:
    'https://wallpaperaccess.com/full/94002.jpg'
  },
  firstName:{
  type: Sequelize.STRING,
  allowNull: false
  }, 
  lastName: {
  type: Sequelize.STRING,
  allowNull: false
  }
})

module.exports = User
