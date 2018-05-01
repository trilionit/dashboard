const router = require('express').Router();
const passport = require('passport');

const User = require('../models/users');
const googleStrategyConfig = require('../config/google-auth-config');

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.getUserById(id, (user)=> {
    done(null, user);
  });
});



router.get('/google', passport.authenticate('google',{
	scope:['profile','email']
}));


router.get('/google/redirect', passport.authenticate('google'), (req, res)=> {
  //res.redirect('/profile');
  res.redirect('/site');
})


module.exports = router;