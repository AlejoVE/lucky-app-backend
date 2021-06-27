const { Schema, model } = require('mongoose');

const userSchema = Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			require: true,
		},
		subscribe: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

userSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

module.exports = model('User', userSchema);
