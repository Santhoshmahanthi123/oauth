const router = require('express').Router();

//OAuth login

router.get('/login',(req,res)=>{
    res.render('login');
});
//OAuth logout 

router.get('/logout',(req,res)=>{
    res.send('logged out!')
});
//OAuth with google

router.get('/google',(req,res)=>{
    //handling with passport
    res.send('logging in through google!');
});

module.exports = router;