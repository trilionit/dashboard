const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require ('express-validator/filter');
const passport = require('passport');
const flash = require('connect-flash');

const User = require('../models/users');

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.getUserById(id, (user)=> {
    done(null, user);
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

    const email = req.body.email;
    const password = req.body.password;

    const entries={
      errors:true,
      email:email,
      password: password
    }

  	const errors = validationResult(req);

    if (!errors.isEmpty()) {
      req.flash('entries', entries);
      errors.array().forEach((error)=> {
        req.flash('error', error.msg);
      });
      res.redirect('/register');            
    
    }
    else {
      //set local strategy
      User.findOne({email: username}).then((currentUser)=>{
        if(currentUser) {
          console.log("current User:", currentUser);
          done(null, currentUser);
        }else {
          res.redirect('/register');
        }
      });
    }

	// if (!errors.isEmpty()) {
	// 	console.log("Yes Errors")
	// 	res.redirect('/register');
	// 	//return res.status(422).json({ errors: errors.mapped() });
	// }
	// else {
	// 	//console.log("No Errors");
	// 	res.redirect('/');
	// }

});


router.get('/logout', (req, res)=> {
  req.logout();
  res.redirect('/');
});

module.exports = router;