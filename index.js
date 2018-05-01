'use strict'
//instatiate path and express
const express = require('express')
const path = require('path')
const https = require('https')
const http = require('http')
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
const localRoutes = require('./routes/local-routes');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');


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
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 60000 }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(loginRoute);
app.use('/', facebookRoute);
app.use('/', googleRoute);
app.use('/', localRoutes);
app.use('/', registerRoute);
app.use( express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(3000, () => {
	console.log('http server started on port:3000')
});
https.createServer(httpsOptions, app).listen(443, () => {
	console.log('https server started  on port:443')
});