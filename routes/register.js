const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

const User = require('../models/users');

//Register
router.get('/register', (req,res)=>{
	if(req.session.user){
		res.redirect('/')
	}
	else {
		const msg = req.flash();
		if(msg.error) {
			let firstname=false, lastname=false, email=false, password=false, confirmPassword =false, mismatch=false, all=false;
			if(msg.error.indexOf("fn")!=-1) {
				firstname=true;
			}
			if(msg.error.indexOf("ln")!=-1) {
				lastname=true;
			}
			if(msg.error.indexOf("em")!=-1) {
				email=true;
			}
			if(msg.error.indexOf("pw")!=-1) {
				password=true;
			}
			if(msg.error.indexOf("cpw")!=-1) {
				confirmPassword=true;
			}
			if(msg.error.indexOf("mpw")!=-1) {
				mismatch=true;
			}
			if(msg.error.length >1 ) {
				all=true;
			}
			//console.log(msg.user);
			res.render('register', {
				showErrors: true,
				all:all,
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: password,
				mismatch: mismatch,
				confirmPassword: confirmPassword,
				entries: msg.entries[0]
				
			})
		}
		else{
			res.render('register');	
		}
	}

	
	//res.sendFile(path.join(__dirname,'public/register.html'))
})
//post request
router.post('/register', [
	check('email', 'em')
	.isEmail()
    .trim()
    .normalizeEmail(),
	check('firstname','fn').isLength({ min: 2 }),
	check('lastname', 'ln').isLength({ min: 2 }),
	check('password', 'pw')
	.isLength({min: 6 }),
	 check("confirmPassword", "cpw")
        .isLength({min: 6 })
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.password) {
                // trow error if passwords do not match
                throw new Error("mpw");
            } else {
                return value;
            }
        })

	], (req, res)=> {
	    const firstName = req.body.firstname;
	    const lastName = req.body.lastname;
		const email = req.body.email;
		const password = req.body.password;
		const confirmPassword = req.body.confirmPassword;

		const entries={
			errors:true,
			firstname:firstName,
			lastname:lastName,
			email:email,
			password: password
		}

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			req.flash('entries', entries);
			errors.array().forEach((error)=> {
				req.flash('error', error.msg);

				//console.log(req.flash);
			});
			res.redirect('/register');			
			//req.flash('error', 'something wrong');
            //res.locals.message = req.flash();
			//console.log(res.locals.message.error);
			
			//let msg = errors.msg;
	  		//res.render('register', {msg: res.locals.message});
			
		
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
	    			res.render('register',{
	    				registered:true
	    			});
	    			return;
	  			}{
	  				//set session coookies
	  				req.session.user=user._id;
	  				console.log(user);
	  				res.redirect('/');	
	  			}
				
			});

	// 	req.flash('success_msg', 'You are registered and can now login');
  		
  		}
  	}

);

//passport strategy

passport.use(new LocalStrategy(
  (username, password, done)=> {
    User.getUserByUsername(username, (err, user) => {
    	if (err) throw err;
    	if(!user){
    		return done(null, false, {errors: 'no user found'})
    	}
    	user.comparePassword(password, user.password, (err, isMatch)=>{
    		if(err) throw err;
    		if(isMatch){
    			return done(null, user)
    		}
    		else{
    			return done (null, false, {errors:'invalid password'})
    		}
    	})
    });

  }
));

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.getUserById(id, (err, user)=> {
    done(err, user);
  });
});




module.exports = router;