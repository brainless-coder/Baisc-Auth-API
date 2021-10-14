const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/sign_up', authController().signup);
router.post('/sign_in', authController().signin);
router.post('/clean', authController().clean);

module.exports = router;