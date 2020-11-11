const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sezzle-df3ce.firebaseio.com"
});

const db = admin.database();
const ref = db.ref('history');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const server = app.listen(port);

//WebSocket with socket.io

//Static files from React
app.use(express.static('public'));
app.unsubscribe(bodyParser.json());

//GET Route

//POST Route

//log listener
console.log('Listening on port', port);
