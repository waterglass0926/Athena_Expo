const { admin, db } = require('../configs/firebase');
const User = require('../models/user');
const Post = require('../models/post');

// GET: Get a list of all users
exports.getAllUsers = async (req, res) => {
    try {
        const snapshot = await db.collection('users').get();
        const users = [];
        snapshot.forEach((doc) => {
            users.push(User.fromSnapshot(doc));
        });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching users' });
    }
};

// GET: Get a single user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const doc = await db.collection('users').doc(userId).get();
        if (!doc.exists) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json(User.fromSnapshot(doc));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching user' });
    }
};

// POST: Create a new user
exports.createUser = async (req, res) => {
    const newUser = req.body;
    try {
        await db.collection('users').doc(newUser.id).set(newUser);
        res.status(200).json({ message: 'User created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
};

// PUT: Update an existing user by ID
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    try {
        await db.collection('users').doc(userId).update(updatedUser);
        res.status(200).json({ message: 'User updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
    }
};

// DELETE: Delete an user by ID
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await db.collection('users').doc(userId).delete();
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting user' });
    }
};

// GET: Get a list of all data of any user
exports.getUserData = async (req, res) => {
    const userId = req.params.id;
    try {
        const snapshot = await db.collection('posts').where('user', '==', userId).get();
        const snap = await db.collection('users').doc(userId).get();
        const data = [];
        snapshot.forEach((doc) => {
            data.push(Post.fromSnapshot(doc, snap));
        });
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data' });
    }
};