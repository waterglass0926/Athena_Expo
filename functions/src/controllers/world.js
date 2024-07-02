const { admin, db } = require('../configs/firebase');
const Place = require('../models/place');
const Continent = require('../models/continent');
const Country = require('../models/country');
const Capital = require('../models/capital');
const Post = require('../models/post');

// GET: Get a list of all places
exports.getAllPlaces = async (req, res) => {
    try {
        const snapshot = await db.collection('places').orderBy('index').get();
        const places = [];
        snapshot.forEach((doc) => {
            places.push(Place.fromSnapshot(doc));
        });
        res.status(200).json(places);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching places' });
    }
};

// GET: Get a list of all continents
exports.getAllContinents = async (req, res) => {
    try {
        const snapshot = await db.collection('continents').orderBy('index').get();
        const continents = [];
        snapshot.forEach((doc) => {
            continents.push(Continent.fromSnapshot(doc));
        });
        res.status(200).json(continents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching continents' });
    }
};

// GET: Get a list of all countries
exports.getAllCountries = async (req, res) => {
    try {
        const snapshot = await db.collection('countries').orderBy('index').get();
        const countries = [];
        snapshot.forEach((doc) => {
            countries.push(Country.fromSnapshot(doc));
        });
        res.status(200).json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching countries' });
    }
};

// GET: Get a list of all capitals
exports.getAllCapitals = async (req, res) => {
    try {
        const snapshot = await db.collection('capitals').orderBy('index').get();
        const capitals = [];
        snapshot.forEach((doc) => {
            capitals.push(Capital.fromSnapshot(doc));
        });
        res.status(200).json(capitals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching capitals' });
    }
};

// POST: Create a new post
exports.createPost = async (req, res) => {
    const newPost = req.body;
    try {
        await db.collection('posts').add(newPost);
        res.status(200).json({ message: 'Post created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating post' });
    }
};

// GET: Get a list of all posts
exports.getAllPosts = async (req, res) => {
    try {
        const snapshot = await db.collection('posts').orderBy('index').get();
        const posts = [];
        Promise.all(snapshot.docs.map(async (doc) => {
            const snap = await db.collection('users').doc(doc.data().user).get();
            posts.push(Post.fromSnapshot(doc, snap));
        })).then(() => {
            res.status(200).json(posts);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
};