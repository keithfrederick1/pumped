//passport file
const passport = require('passport');
const User = require('./db/models/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//once this runs, the serializeUser function is called

//put this in env
passport.use(new GoogleStrategy({
    clientID: '972420547961-pclvv9hksu2c92cicutu0nvomioomaon.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    //use profile id to check if user is regisyteered in db
    User.findOrCreate({ where: { 
      googleId: profile.id,
      username: profile.displayName,
    }}), (err, user) => {
      return cb(err, user);
    };
  }
));
//thiss takes users id to ensure cookie is small and passes it to ession
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  User.findById(id, (err, user) => {
    done(null, user);
  });
});