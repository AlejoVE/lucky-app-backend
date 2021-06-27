const User = require('../models/UserModel');

const registerUser = async (req, res) => {
	const { firstName, lastName, email, subscribe } = req.body;
	const user =  await User.find({ email }).exec();
	const isExists = user.length>0
	

	if (isExists) {
		res.status(400).json({ msg: 'This email already exists' });
		return;
	}

	try {
		await User.create({ firstName, lastName, email, subscribe });
		res.status(201).json({ msg: 'User created successfully' });
	} catch (error) {
		res.status(500).json({ msg: 'Something bad happened, please try later' });
		console.log(error);
	}
};

module.exports = {
	registerUser,
};
