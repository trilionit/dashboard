const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20');
const AuthKeys= require ('./AuthKeys');

const User = require('../models/users');

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id).then((user)=>{
  	done(null, user);
  })
});

passport.use(
	new GoogleStrategy({
		callbackURL:'/google/redirect',
		clientID:AuthKeys.google.clientID,
		clientSecret:AuthKeys.google.clientSecret
	}, (accessToken, refreshToken, profile, done) => {

		const username=profile.emails[0].value;

		User.findOne({email: username}).then((currentUser)=>{
			if(currentUser) {
				console.log("current User:", currentUser);
				done(null, currentUser);
			}else {
				new User({
					firstname: profile.name.givenName,
					lastname: profile.name.familyName,
					email: profile.emails[0].value
				}).save().then((newUser)=> {
					console.log("New User:", newUser);
					done(null, newUser);
				})
			}
		});

		// User.findOne({email:username}).then((currentUser) {
	 //    	if(currentUser) {
	 //    		console.log("Current User", currentUser);
	 //    		//done(null, user);
	 //    	}
	 //    	else {
		//     	new User({
		// 	        firstname: profile.name.givenName,
		// 	        lastname: profile.name.familyName,
		// 	        email: profile.emails[0].value
	 //    		}).save().then((newUser)=>{
	 //    			console.log("new User:", newUser);
	 //    		});
	 //    	}
	 //    })
	})
);