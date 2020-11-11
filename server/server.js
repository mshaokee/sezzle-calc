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
const io = require('socket.io').listen(server)
io.origins("*:*")
io.on('connection', socket => {
    socket.on('new result', function (msg) {
        io.emit('rerender', msg);
    });
});//end

//Static files from React
app.use(express.static('public'));
app.unsubscribe(bodyParser.json());

//TEST ROUTE
app.get('/', (req, res) => {
    db.ref().once('value').then(snapshot => res.json(snapshot));
});

//GET Route
app.get('/history', (req, res) => {
    //create array to hold data
    let arrayAnswer = [];
    //firebase style query
    //db history order by most recent 10
    const query = ref.orderByChild('timeStamp').limitToFirst(10);
    //get value from db then grab value of data and push into array afterwards response with array
    query.once('value').then((function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
            arrayAnswer.push(childSnapshot.val().value);
        });
        res.json(arrayResult);
    }));//end query
});//end get route

//POST Route
app.post(`/history`, (req, res) => {
    //set time and value from data
    const recordTime = req.body['time']
    const recordVal = req.body['value']
    //find /records api and push data
    db.ref('/records').push({
        "timeStamp": recordTime,
        "value": recordVal
    });//end
    res.status(200);
    res.send("Success!");
});//end post route

//heroku
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//log listener
console.log('Listening on port', port);
