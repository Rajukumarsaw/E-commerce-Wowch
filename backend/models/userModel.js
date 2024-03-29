const  {model, Schema}=require('mongoose');
const userSchema = new Schema({
    firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	confirmPassword: {
		type: String,
		required: true,
	},
	
	image: {
		type: String,
	},
});
module.exports=model("user", userSchema);
