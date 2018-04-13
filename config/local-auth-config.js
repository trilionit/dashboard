const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');
const localStrategyConfig = require('../config/local-auth-config');

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.getUserById(id, (user)=> {
    done(null, user);
  });
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, (err, user) => {
    	if (err) throw err;
    	if(!user){
    		return done(null, false, {message: 'no user found'})
    	}
    	user.comparePassword(password, user.password, (err, isMatch)=>{
    		if(err) throw err;
    		if(isMatch){
    			return done(null, user)
    		}
    		else{
    			return done (null, false, {message:'invalid password'})
    		}
    	})
    });

  }
));