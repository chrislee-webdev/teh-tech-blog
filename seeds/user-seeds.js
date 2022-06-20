const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'PayRenJ',
    email: 'payrenj@email.com',
    password: 'password123'
  },
  {
    username: 'ameizling',
    email: 'ameizling@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
