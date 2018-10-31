require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile');

const cookieSession = require('cookie-session');
const passport = require('passport');
//connect to mongodb    
const DBURL = process.env.DBURL;
const KEY = process.env.KEY;
mongoose.connect(DBURL, { useNewUrlParser: true },()=>{
    console.log('Connected to mongoDb!');
});
//setting up view engine
app.set('view engine','ejs');

app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : [KEY]
}));
//passport initialization

app.use(passport.initialize())
app.use(passport.session())
//setup routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

// app.use(passportSetup);
//rendering home page
app.get('/',(req,res)=>{
res.render('home',{user : req.user});
});

//Starting the server
app.listen(process.env.PORT || 3000,()=>{
    console.log('server started on port : 3000')
})