const router = require('express').Router();
const path = require('path');
const passport = require('passport');

const authCheck = (req, res, next)=>{
	if(!req.user){
		res.redirect("/login");
	}
	else{
		next();
	}
}

router.get('/site', (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

router.get('/login', (req, res)=>{
    res.redirect('/');
})

router.get('/logout', (req, res)=> {
    req.logout();
    res.redirect('/');
});

module.exports = router;