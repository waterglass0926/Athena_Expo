var admin = require('firebase-admin');
var serviceAccount = require('./athena-1127.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://athena-1127.frebaseio.com'
});

const db = admin.firestore();

module.exports = { admin, db }