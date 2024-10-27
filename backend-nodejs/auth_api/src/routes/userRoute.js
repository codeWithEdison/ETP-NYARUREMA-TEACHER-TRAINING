const express= require('express');
const userController = require('../controllers/userCntroller');
const {validateRegister} = require('../middlewares/validation')

const route = express.Router();
route.post('/register',validateRegister, userController.registerUser);

module.exports = route; 