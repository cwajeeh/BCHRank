const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const { password } = req.body;
  if (password !== config.adminPassword) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = authMiddleware;
