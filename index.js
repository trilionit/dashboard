'use strict'
//instatiate path and express
const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const mongoCredentials= require('./config/configFile')

mongoose.connect(mongoCredentials.mongoURI, (err)=>{
	if(err) throw err;
	//create log file n log connection timestamp
	console.log("mongoDB connected");
});
const db = mongoose.connection;

const facebookRoute = require('./routes/facebook-route');
const googleRoute = require('./routes/google-route');
const localRoute = require('./routes/local-route');
const registerRoute = require('./routes/register');


const sessionKeys = require('./config/SessionKeys');
//app init
const app = express();

const authCheck = (req, res, next)=>{
	if(!req.user){
		res.redirect("/login");
	}
	else{
		next();
	}
}
//set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handleBars({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());

app.use(session({
	secret: sessionKeys.session.secret,
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 60000 }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// app.use('/', facebookOAuthRoutes);
// app.use('/', googleOAuthRoutes);
// app.use('/', localRoute);
// app.use('/', registerRoutes);


// //use the public folder as the static directory. 
// app.use( express.static(path.join(__dirname, 'public')));

// //send any route to index.html where the react app is mounted
// app.get('*',  (req,res)=>{
// 	if(req.session.user) {
// 		res.sendFile(path.join(__dirname,'public/index.html'))
// 	}
// })

app.use('/', facebookRoute);
app.use('/', googleRoute);
app.use('/', localRoute);
app.use('/', registerRoute);

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

app.get('/login', (req,res)=>{
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
        password: password,
        entries: msg.entries[0]
      })
    }
})
//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	if(req.session.user) {
		res.sendFile(path.join(__dirname,'public/index.html'))
	}
})

const server = https.createServer(httpsOptions, app).listen(3000, () => {
	console.log('running on localhost:3000')
});