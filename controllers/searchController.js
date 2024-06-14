const Entry = require('../models/entryModel');

exports.searchEntries = async (req, res) => {
  const { keywords } = req.query;
  try {
    const results = await Entry.find({
      keywords: { $regex: keywords, $options: 'i' },
    }).sort({ totalBCH: -1, createdAt: 1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addEntry = async (req, res) => {
  const { keywords, name, cashAddress, linkAddress, description, totalBCH } = req.body;
  if (!keywords || !name || !cashAddress) {
    return res.status(400).json({ message: 'Required fields missing' });
  }
  try {
    const entry = new Entry({ keywords, name, cashAddress, linkAddress, description, totalBCH });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
