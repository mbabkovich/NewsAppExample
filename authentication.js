const passport    = require('passport');
const passportJWT = require("passport-jwt");

const UsersModel = require('./models/usersModel');
const usersModel = new UsersModel();

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

const jwtsecret = "mysecretkey";

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    },
    async (login, password, cb) => {
        try {
            let user = await usersModel.verifyUser(login, password);
            if (!user) {
                return cb(null, false, {message: 'Incorrect email or password.'});
            }

            return cb(null, user, {
                message: 'Logged In Successfully'
            });
        }
        catch (err) {
            return cb(new Error('bla bla bla ' + err));
        }
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : jwtsecret
    },
    function (jwtPayload, cb) {

        //find the user in db if needed
        return usersModel.getUser(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));