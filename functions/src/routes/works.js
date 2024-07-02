const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const worksController = require('../controllers/works');

// router.use(authMiddleware.isAuthenticated);

// Define routes
router.get('/', worksController.getAllWorks);

module.exports = router;
