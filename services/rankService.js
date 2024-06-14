const Entry = require('../models/entryModel');

const updateRank = async (entryId, amount) => {
  const entry = await Entry.findById(entryId);
  if (entry) {
    entry.totalBCH += amount;
    await entry.save();
  }
};

module.exports = updateRank;
