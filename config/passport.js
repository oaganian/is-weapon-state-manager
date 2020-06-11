const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');
const Admin = require('../models/Admin');
const {secret} = require('./database');

module.exports = (role,passport) =>{
    let opts ={
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    };

    passport.use(new JwtStrategy(opts, async (payload, done)=>{
        try{
            //get user by id
            if(role ==='users'){
                const user = await User.findById(payload.data._id);
                if(!user){
                    return done(null, false);
                }

                return done(null, user);
            }
            if(role ==='admin'){
                const admin = await Admin.findById(payload.data._id);
                if(!admin){
                    return done(null, false);
                }

                return done(null, admin);
            }

        }catch(err){
            return done(null, false);
        }


    }));

}
