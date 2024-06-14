const Entry = require('../models/entryModel');
const config = require('../config/config');

exports.deleteEntry = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (password !== config.adminPassword) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  try {
    await Entry.findByIdAndDelete(id);
    res.json({ message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateFee = async (req, res) => {
  const { fee, password } = req.body;
  if (password !== config.adminPassword) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  try {
    config.uploadFee = fee;
    res.json({ message: 'Fee updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
