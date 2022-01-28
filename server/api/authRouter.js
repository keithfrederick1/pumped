const { Router } = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport.js');

const authRouter = Router();

//cookies. once session is verified user is sent home
authRouter.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
  if(req.user) {
    next()
  } else {
    res.sendStatus(401);
    //unauthorized
  }
}



authRouter.use(passport.initialize());
authRouter.use(passport.session());



//on fail of login
authRouter.get('/failed', (req, res) => {
  res.send('Failed to Authenticate');
})
//successful login 
authRouter.get('/auth-status', isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.displayName}!`);
})

authRouter.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    console.log('wtf');
    //save cookie, create a session, add user to db
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  authRouter.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/login');
  });
  // app.get('/home')

  module.exports = { authRouter };