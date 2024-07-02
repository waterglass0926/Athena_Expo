const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const worldController = require('../controllers/world');

// router.use(authMiddleware.isAuthenticated);

// Define routes
router.get('/places', worldController.getAllPlaces);
router.get('/continents', worldController.getAllContinents);
router.get('/countries', worldController.getAllCountries);
router.get('/capitals', worldController.getAllCapitals);

router.post('/posts', worldController.createPost);
router.get('/posts', worldController.getAllPosts);

module.exports = router;
