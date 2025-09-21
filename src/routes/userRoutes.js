const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Example route
router.post('/assess-skills', userController.assessSkills);

module.exports = router;