const bcrypt = require('bcrypt');
const User = require('../models/user');

const authService = {
  signUp: async (req, res) => {
    const { username, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
      await User.create(
        { username, name, password: hashedPassword });
      res.redirect('/auth/login');
    } catch (e) {
      res.redirect('/auth/signup');
    }
  },
};

module.exports = authService;