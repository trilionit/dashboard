const router = require('express').Router();
const passport = require('passport');

const User = require('../models/users');
const facebookStrategyConfig = require('../config/facebook-auth-config');

router.get('/facebook', passport.authenticate('facebook', {
	scope:['public_profile', 'email']
}));

router.get('/facebook/redirect', passport.authenticate('facebook',{
	successRedirect:'/site',
	failureRedirect:'/register'
}));

module.exports = router;

