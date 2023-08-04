// config.js
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'}); //config path



let config = {
    dbUrl:
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hefthuy.mongodb.net/signupInfo?retryWrites=true&w=majority`,
  };
  
  module.exports = config;