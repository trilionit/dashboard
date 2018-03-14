'use strict'
//instatiate path and express
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const session = require('express-session');

const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dashboardapp', (err)=>{
	if(err) throw err;
	//create log file n log connection timestamp
	console.log("mongoDB connected");
});
const db = mongoose.connection;

const authRoutes = require('./routes/auth-routes');
const registerRoutes = require('./routes/register');
const passportConfig = require('./config/google-auth-config');

const sessionKeys = require('./config/SessionKeys');
//app init
const app = express();

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handleBars({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());

app.use(session({
	secret: sessionKeys.session.secret,
	resave: true,
	saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

app.use('/auth', authRoutes);
app.use('/', registerRoutes);
//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

//send any route to index.html where the react app is mounted
app.get('/login', (req,res)=>{
	res.render('login');
	//res.sendFile(path.join(__dirname,'public/login.html'))
})
app.get('/register', (req,res)=>{
	res.render('register');
	//res.sendFile(path.join(__dirname,'public/register.html'))
})
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))