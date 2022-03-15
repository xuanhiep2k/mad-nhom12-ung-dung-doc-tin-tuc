const express = require('express');
const routes = express.Router();

//import Controllers
const { register, login } = require('../controllers/usersCtrl');

//route register
routes.post('/register', register)

//route login
routes.post('/login', login)

module.exports = routes;
