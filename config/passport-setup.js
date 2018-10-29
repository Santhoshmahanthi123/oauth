const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
const User = require('../models/user');  
passport.use(new GoogleStategy({
//options for the google to start
    clientID : process.env.clientID,
    clientSecret : process.env.clientSecret,
    callbackURL :'/auth/google/redirect'

},(accessToken,refreshToken,profile,done)=>{
     //passport call back function 
     console.log('passport function started!');
     console.log(profile);
     new User({
         username : profile.displayName, 
         googleId : profile.id
     }).save().then((newUser)=>{
         console.log('new user created:'+newUser);
     })
}))
