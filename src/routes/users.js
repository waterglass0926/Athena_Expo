const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const usersController = require('../controllers/users');

// router.use(authMiddleware.isAuthenticated);

// Define routes
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.get('/data/:id', usersController.getUserData);

module.exports = router;
