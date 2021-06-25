const User = require('../models/UserModel');

const registerUser = async (req, res) => {
	const { firstName, lastName, email } = req.body;
	const user = User.find({ email }).exec();

	if (user) {
		res.status(400).json({ msg: 'This email already exists' });
		return;
	}

	try {
		await User.create({ firstName, lastName, email });
		res.status(201).json({ msg: 'User created successfully' });
	} catch (error) {
		res.status(500).json({ msg: 'Something bad happened, please try later' });
		console.log(error);
	}
};

module.exports = {
	registerUser,
};
