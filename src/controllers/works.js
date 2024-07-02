const { admin, db } = require('../configs/firebase');
const Work = require('../models/work');

// GET: Get a list of all works
exports.getAllWorks = async (req, res) => {
    try {
        const snapshot = await db.collection('works').orderBy('index').get();
        const works = [];
        snapshot.forEach((doc) => {
            works.push(Work.fromSnapshot(doc));
        });
        res.status(200).json(works);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching works' });
    }
};