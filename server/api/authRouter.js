const { Router } = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../db/models/user');

const { CLIENT_ID, CLIENT_SECRET, CALLBACK_URL } = process.env;
const authRouter = Router();

// cookies. once session is verified user is sent home

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

passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
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

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    // save cookie, create a session, add user to db
    // Successful authentication, redirect home.
    res.redirect('/');
  },
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
    // unauthorized
  }
};

// on fail of login
authRouter.get('/failed', (req, res) => {
  res.send('Failed to Authenticate');
});
// successful login
authRouter.get('/auth-status', isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.displayName}!`);
});

authRouter.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
});
// authRouter.get('/home')

module.exports = { authRouter };
