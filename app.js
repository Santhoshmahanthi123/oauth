const express = require('express');
const ejs = require('ejs');
const app = express();
app.get('/',(req,res)=>{
    res.send('Welcome to OAuth tutorial.');

});
app.listen(3000,()=>{
    console.log('server started on port : 3000')
})