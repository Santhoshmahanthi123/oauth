const express = require('express');
const ejs = require('ejs');
const app = express();
const authRoutes = require('./routes/auth-routes')
//setting up view engine
app.set('view engine','ejs');
//setup routes

app.use('/auth',authRoutes);
//rendering home page
app.get('/',(req,res)=>{
res.render('home');
});

//Starting the server
app.listen(3000,()=>{
    console.log('server started on port : 3000')
})