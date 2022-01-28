// Using express to create app functionality and routing
const express = require('express');
const { pumpedRouter } = require('./api/routes');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport.js');
// const clientPATH = require('./index.js').clientPATH;
const path = require('path');

const app = express();
// use api/router as the base route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/router', pumpedRouter);


//cookies. once session is verified user is sent to /good
app.use(cookieSession({
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


app.use(passport.initialize());
app.use(passport.session());

// app.get('/google', (req, res) => {
//   res.redirect('/Users/keith/pumped/client/src/components/pages/Login/Signup.jsx/LoginSignUp.jsx'), (err) => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   }

// });

//on fail of login
app.get('/failed', (req, res) => {
  res.send('Failed to Authenticate');
})
//successful login 
app.get('/auth-status', isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.displayName}!`);
})

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    //save cookie, create a session, add user to db

    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/login');
  });
  // app.get('/home')


module.exports = app;
