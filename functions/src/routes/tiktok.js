const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const tiktokController = require('../controllers/tiktok');

// router.use(authMiddleware.isAuthenticated);

// Define routes
router.post('/likeCreate', tiktokController.likeCreate);
router.post('/likeDelete', tiktokController.likeDelete);
router.post('/followCreate', tiktokController.followCreate);
router.post('/followDelete', tiktokController.followDelete);
router.post('/newUser', tiktokController.newUser);

module.exports = router;
