const express = require('express');
const router = express.Router();
const { deleteEntry, updateFee } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.delete('/delete/:id', authMiddleware, deleteEntry);
router.post('/update-fee', authMiddleware, updateFee);

module.exports = router;
