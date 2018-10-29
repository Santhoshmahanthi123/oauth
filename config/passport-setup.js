const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
const User = require('../models/user');  
passport.use(new GoogleStategy({
//options for the google to start
    clientID : process.env.clientID,
    clientSecret : process.env.clientSecret,
    callbackURL :'/auth/google/redirect'

},(accessToken,refreshToken,profile,done)=>{
    //if the user exists in our db then
    User.findOne({googleId : profile.id}).then((currentUser)=>{

        if(currentUser){
            //if user already exists in db then

            console.log('This user is existing user:'+currentUser);

        }
        else{
            //if user not exists in db then create a new user
            // console.log('passport function started!');
            // console.log(profile);
            new User({
                username : profile.displayName, 
                googleId : profile.id
            }).save().then((newUser)=>{
                console.log('new user created:'+newUser);
            });
        }

    })


     //passport call back function 
 
   
}))
