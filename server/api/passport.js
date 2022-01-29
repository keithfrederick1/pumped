// passport file
const passport = require('passport');
const User = require('../db/models/user.js');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// once this runs, the serializeUser function is called

// put this in env
passport.use(new GoogleStrategy({
  clientID: '972420547961-pclvv9hksu2c92cicutu0nvomioomaon.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // use profile id to check if user is registered in db
  User.findOrCreate({
    where:
      {
        googleId: profile.id,
        username: profile.displayName,
      },
  }).then((user) => done(null, user))
    .catch((err) => console.error(err));
}));
// this takes users id to ensure cookie is small and passes it to session
passport.serializeUser((user, done) => {
  console.log(user[0].dataValues._id);
  done(null, user[0].dataValues.googleId);
});

passport.deserializeUser((googleId, done) => {
  console.log(googleId);
  User.findOne({ where: { googleId } })
    .then((user) => {
      console.log('success');
      done(null, user);
    })
    .catch((err) => console.error(err));
});
