const express = require('express');
const User = require('../models/User');

const users = express.Router();
const passport = require('passport');

users.use(express.json());

users.get('/signup/newUser', (req, res) => {
  res.send(req.flash('errors_msg'));
})

users.post('/signup/newUser', async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  if ( username === '' || email === '' || password === '' || password.length < 5 || password != repeatPassword ) {
    req.flash('errors_msg', 'What!? Have you manipulated my code?');
    res.redirect('/api/users/signup/newUser');
  } else {
    const userEmail = await User.findOne({ email: email });
    if ( userEmail ) {
      req.flash('errors_msg', 'Email in use');
      res.redirect('/api/users/signup/newUser');
    } else {
      const newUser = new User({ username, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'You are registered');
      res.redirect('/api/users/signin');
    }
  }
})

users.get('/signin', (req, res) => {
  res.send(req.flash('success_msg'))
})

users.post('/signin', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/api/users/signin',
  failureFlash: true
}))

users.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      console.error('Logout Error:', err);
      res.status(500).send('Internal Error')
    } else {
      res.redirect('/api/users/signin');
    }
  })
})

module.exports = users;