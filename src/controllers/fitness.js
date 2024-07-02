const { admin, db } = require('../configs/firebase');
const Workout = require('../models/workout');

// GET: Get a list of all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const snapshot = await db.collection('workouts').orderBy('index').get();
        const workouts = [];
        snapshot.forEach((doc) => {
            workouts.push(Workout.fromSnapshot(doc));
        });
        res.status(200).json(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching workouts' });
    }
};

// POST: Create a new workout
exports.createWorkout = async (req, res) => {
    const newWorkout = req.body;
    try {
        await db.collection('workouts').add(newWorkout);
        res.status(200).json({ message: 'Workout created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating post' });
    }
};
