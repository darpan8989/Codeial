const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User =require('../models/user');

passport.use(LocalStrategy({
    usernameField : 'email'
},function(email,password,done){
   User.findOne({email:email},function(err,user){
       if(err){
           console.log('Error in finding user ---> Passport');
           return done(err);
       }
       if(!user || user.password!=password){
            console.log('Invalid username/Password')   
        return done(null,false);
       }
       return done(null,true);
   }); 
}));


passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        return done(null,user);
    });
});


module.exports=passport;