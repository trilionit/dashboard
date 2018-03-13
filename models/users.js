const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstname:  String,
    lastname: String,
    email:   {
    	type: String,
    	index: true,
    	unique: true
    },
    password: String,
    privileges: Number,
    date: { type: Date, default: Date.now },

 });

const User = module.exports = mongoose.model('User', userSchema);

module.exports.createNewUser =(newUser, callback) => {
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);	        
	    });
	});
}
//find username
module.exports.getUserByUsername = (username, callback) => {
	let query = {email: username};
	User.findOne(query, callback);
}
//get user by id
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

//compare passwords if user exists
module.exports.comparePassword = (userPassword, hash, callback) =>{
	// Load hash from your password DB.
	bcrypt.compare(userPassword, hash).then(function(err, isMatch) {
	    if(err) throw err;
	    callback(null, isMatch);
	});
}
