var UsersController = require('../controllers/usersController');
let usersController = new UsersController();

var express = require('express');
var router = express.Router();

router.get('/:login', usersController.getUser);

router.post('/', usersController.registerUser);

module.exports = router;
