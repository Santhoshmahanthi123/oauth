const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
passport.use(new GoogleStategy({
//options for the google to start
    clientID : process.env.clientID,
    clientSecret : process.env.clientSecret

}),()=>{
     //passport call back function 
})
