const router = require('express').Router();
const authCheck = (req, res, next)=>{
	if(!req.user){
		res.redirect("/login");
	}
	else{
		next();
	}
}
//send any route to index.html where the react app is mounted
router.get('*', authCheck,  (req,res)=>{
	if(req.session.user) {
		res.sendFile(path.join(__dirname,'public/index.html'))
	}
})

module.exports = router;