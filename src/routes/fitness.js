const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const fitnessController = require('../controllers/fitness');

// router.use(authMiddleware.isAuthenticated);

// Define routes
router.get('/workouts', fitnessController.getAllWorkouts);
router.post('/workouts', fitnessController.createWorkout);

module.exports = router;
