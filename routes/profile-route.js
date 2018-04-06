const router = require('express').Router();

router.get('/profile', (req, res)=> {
	res.send(req.user.firstname);
});

module.exports = router;