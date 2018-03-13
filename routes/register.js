const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');


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
router.post('/register', [
	check('email')
	.isEmail().withMessage('must be an email')
    .trim()
    .normalizeEmail(),
	check('firstname').isLength({ min: 2 }).withMessage('Firstname must not be empty'),
	check('lastname').isLength({ min: 2 }).withMessage('Lastname must not be empty'),
	check('password', 'requires 6 characters minimum')
	.isLength({ min: 6 }),
	 check("confirmPassword", "does not match password")
        .isLength({ min: 6 })
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.password) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        })

	], (req, res)=> {
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
	let email = req.body.email;
	let password = req.body.password;
	let confirmPassword = req.body.confirmPassword;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {

		console.log(errors.mapped());
  		res.redirect('/register');
		
	
  	}
  	else {
  		const newUser = new User({
			firstname: firstName,
			lastname: lastName,
			email:email,
			password: password
		});

		User.createNewUser(newUser, function(err, user){
			if ( err && err.code === 11000 ) {
				//console.log('User already exists')
    			//req.flash('error', 'User already exists');
    			res.redirect('/register');
    			return;
  			}{
  				console.log(user);
  				res.redirect('/');	
  			}
			
		});

	// 	req.flash('success_msg', 'You are registered and can now login');
  		
  	}

	
});

router.post('/register/google', passport.authenticate('google',{
	scope:['profile']
}));


router.post('/register/google/redirect', passport.authenticate('google'), (req, res)=> {
	res.send("redirected");
})

module.exports = router;