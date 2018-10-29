const express = require('express');
const ejs = require('ejs');
const app = express();
//setting up view engine
app.set('view engine','ejs');

//rendering home page
app.get('/',(req,res)=>{
res.render('home');
});

//Starting the server
app.listen(3000,()=>{
    console.log('server started on port : 3000')
})