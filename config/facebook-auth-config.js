const passport = require('passport');
const FacebookStrategy = require ('passport-facebook').Strategy;
const AuthKeys= require ('./AuthKeys');

const User = require('../models/users');

passport.use(
	new FacebookStrategy({
		callbackURL:'https://localhost:443/facebook/redirect',
		clientID:AuthKeys.facebook.clientID,
		clientSecret:AuthKeys.facebook.clientSecret,
		profileFields: ['name', 'email']
	}, (accessToken, refreshToken, profile, done) => {
		console.log("family name:", profile.name.familyName);
		const username=profile.emails[0].value;

		User.findOne({email: username}).then((currentUser)=> {
			if(currentUser) {
				console.log("Current User:", currentUser);
				done(null, currentUser);
			}else {
				new User({
					firstname: profile.name.givenName,
					lastname: profile.name.familyName,
					email: username
				}).save().then((newUser)=>{
					console.log("New User:", newUser);
					done(null, newUser);
				});
			}
		})
	})
);