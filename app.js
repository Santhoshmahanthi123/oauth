require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth-routes')
//connect to mongodb    
const DBURL = process.env.DBURL;
mongoose.connect(DBURL, { useNewUrlParser: true },()=>{
    console.log('Connected to mongoDb!');
});
//setting up view engine
app.set('view engine','ejs');
//setup routes
app.use('/auth',authRoutes);
// app.use(passportSetup);
//rendering home page
app.get('/',(req,res)=>{
res.render('home');
});

//Starting the server
app.listen(3000,()=>{
    console.log('server started on port : 3000')
})