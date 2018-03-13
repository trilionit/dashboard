const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require ('express-validator/filter');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', [
	check('username')
		.isLength({ min: 5 }),

  	check('password', 'passwords must be at least 5 chars long and contain one number')
	    .isLength({ min: 5 })
	    .matches(/\d/)

    ], 
    passport.authenticate('local', {
    	successRedirect: '/',
    	failureRedirect: '/login',
        failureFlash: true 
    }), 
    (req, res, next) => {

  	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log("Yes Errors")
		res.redirect('/register');
		//return res.status(422).json({ errors: errors.mapped() });
	}
	else {
		console.log("No Errors");
		res.redirect('/');
	}

});

router.get('/google', passport.authenticate('google',{
	scope:['profile']
}));


router.get('/google/redirect', passport.authenticate('google'), (req, res)=> {
	res.send("redirected");
})

module.exports = router;