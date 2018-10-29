const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
passport.use(new GoogleStategy({
//options for the google to start
    clientID : process.env.clientID,
    clientSecret : process.env.clientSecret,
    callbackURL :'/auth/google/redirect'

},(accessToken,refreshToken,profile,done)=>{
     //passport call back function 
     console.log(profile);
}))
