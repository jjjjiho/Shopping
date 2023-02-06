const path = require('path');
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/auth-controller');
const passport = require('passport');

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login',
}), (req, res) => {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout(() => {
    res.redirect('/');
  });
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.post('/signup', async function (req, res) {
  await loginController.signUp(req, res);
});

module.exports = router;