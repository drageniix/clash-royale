const firebase = require('firebase/app');
require('firebase/firestore');

const config = {
    apiKey: process.env.FS_apiKey,
    authDomain: process.env.FS_authDomain,
    databaseURL: process.env.FS_databaseURL,
    projectId: process.env.FS_projectId,
    storageBucket: process.env.FS_storageBucket,
    messagingSenderId: process.env.FS_messagingSenderId
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

module.exports = db.collection('history');
