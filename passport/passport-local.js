const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (userId, done) => {
    const user = await Users.findByPk(userId, { raw: true });

    done(null, user);
  });

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: false,
  }, async (username, password, done) => {
    const user = await Users.findOne({ where: { username }, raw: true });

    if (!user) {
      return done(null, false, { message: '존재하지 않는 아이디입니다.' });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (isCorrectPassword) {
      return done(null, user);
    } else {
      return done(null, false, { message: '비밀번호가 틀렸습니다. ' });
    }
  }));
};

