const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20');
const AuthKeys= require ('./AuthKeys');

passport.use(
	new GoogleStrategy({
		callbackURL:'/auth/google/redirect',
		clientID:AuthKeys.google.clientID,
		clientSecret:AuthKeys.google.clientSecret
	}, (accessToken, refreshToken, profile, cb) => {
		console.log(profile);
	})
);