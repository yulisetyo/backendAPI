var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var jwtStrategy = passportJWT.Strategy;
var option = {}
option.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
option.secretOrKey = 'ini_secret_key';
var strategy = new jwtStrategy(option, function(jwt_payload, next) {
    console.log(jwt_payload);
    // var model = require('./model/modeluser');
    // model.getUser();
    if(jwt_payload) {
        next(null, jwt_payload);
    } else {
        next(null, false);
    }
});
passport.use(strategy);
module.exports = passport;