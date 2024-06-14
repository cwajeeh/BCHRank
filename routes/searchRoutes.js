const express = require('express');
const router = express.Router();
const { searchEntries, addEntry } = require('../controllers/searchController');

router.get('/search', searchEntries);
router.post('/add', addEntry);

module.exports = router;
