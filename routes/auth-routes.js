const router = require('express').Router();

const passport = require('passport');

//OAuth login

router.get('/login',(req,res)=>{
    res.render('login');
});
//OAuth logout 

router.get('/logout',(req,res)=>{
    res.send('logged out!')
});
//OAuth with google

router.get('/google',passport.authenticate('google',{
    scope : ['profile']
}));

//call back route for google to redirect

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('Call back URI working successfully!')
})

module.exports = router;