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

const authCheck = (req, res, next)=> {
    if(!req.user){
        res.redirect("/");
    }
    else{
        next();
    }
}


router.get('/', (req,res)=>{
    //res.render("login");
    const msg = req.flash();
    if(msg.error) {
        let email=false, password=false, all=false;
      
        if(msg.error.indexOf("em")!=-1) {
            email=true;
        }
        if(msg.error.indexOf("pw")!=-1) {
            password=true;
        }
        if(msg.error.length >1 ) {
            all=true;
        }
        res.render('login', {
            showErrors: true,
            all:all,
            email: email,
            password: password
        })
    }
    else {
        res.render('login')
    }
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
});
module.exports = router;