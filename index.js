'use strict'
//instatiate path and express
const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth-routes');
const passportConfig = require('./config/google-auth-config');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');

const flash = require('connect-flash');
const session = require('express-session');

const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dashboardapp', (err)=>{
	if(err) throw err;
	console.log("mongoDB connected");
});
const db = mongoose.connection;


const app = express();

app.use('/auth', authRoutes);

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

//send any route to index.html where the react app is mounted
app.get('/login', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/login.html'))
})
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))