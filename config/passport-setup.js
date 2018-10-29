const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
passport.use(new GoogleStategy({
//options for the google to start

}),()=>{
     //passport call back function 
})
