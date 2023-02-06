const express = require('express');
const app = express();
const session = require('express-session');
const authRouter = require('./router/auth-router');
const mainRouter = require('./router/main-router');
const path = require('path');
const passport = require('passport');
const passportConfig = require('./passport/passport-local');
const PORT = 3030;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(session({
  secret: 'sessionSecret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
  },
}));
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));
app.use(express.static('images'));

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.baseURL = `http://localhost:${PORT}`;

  next();
});

app.use('/', mainRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
