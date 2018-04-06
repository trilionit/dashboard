const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require ('express-validator/filter');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');
const googleConfig = require('../config/google-auth-config');

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

router.get('/login', (req,res)=>{
  res.render('login');
})

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
		//console.log("No Errors");
		res.redirect('/');
	}

});

router.get('/google', passport.authenticate('google',{
	scope:['profile','email']
}));


router.get('/google/redirect', passport.authenticate('google'), (req, res)=> {
  //res.redirect('/profile');
  res.redirect('/');
})

router.get('/logout', (req, res)=> {
  req.session.destroy(function(err) {
    //cannot access session here
    if(err){
      console.log(err)
    }

    else {
      res.redirect('/login')
    }
  })
});

module.exports = router;