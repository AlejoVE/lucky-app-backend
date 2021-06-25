const express = require('express');
const { check } = require('express-validator');
const { registerUser } = require('../controllers/userController');
const { validateInputs } = require('../middlewares/validateInputs');
const router = express.Router();

router.post(
	'/',
	[
		//middleware
		check('firstName', 'Please fill your first name').notEmpty(),
		check('lastName', 'Please fill your last name').notEmpty(),
		check('email', 'Please provide a valid email').isEmail(),
		validateInputs,
	],
	registerUser
);

module.exports = router;
