const authService = require('../services/auth-service');

const authController = {

  signUp: async (req, res) => {
    await authService.signUp(req, res);
  },
};

module.exports = authController;