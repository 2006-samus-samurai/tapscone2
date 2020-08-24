const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define("users", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
    },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  },
  profilePicUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'
    },
    firstName:{
    type: Sequelize.STRING,
    allowNull: false
    },
    lastName: {
    type: Sequelize.STRING,
    allowNull: false
    }
});

module.exports = User
