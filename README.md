# Realtime Calculator

## Summary
The goal is to build a calculator app that updates immediately upon calculation. The updates should be seen in cases where user A or B can be connected from different sources. Results should remain between sessions as well and only show 10 latest calculations. The application must also be uploaded and hosted so that others may view it.

## NOTES - Current 11/11/2020

App does not currently work -- while building this project I ran into "Segmentation faults" and "mollac" errors upon spinning up the server and it would not start not allowing me to test the application full stack. Calculator operates but connection to Firebase/Socket.io does not at this time.

## Prerequisites
Software required to run this application:

* [Node.js](https://nodejs.org/en/)

## Installations

1.) Open source code editor and run ```npm install```

2.) Head to [Firebase](https://firebase.google.com/) and create a project to set up your database.

3.) At the Firebase console, click 'Project Settings' -> 'Service accounts' -> 'Generate new private key' and paste the data in a created serviceAccountKey.json file.

4.) Copy the Admin SDK configuration snippet data and replace with current data in the server/server.js file to match your Firebase data.

5.) Run ```npm run server``` in your terminal and then run ```npm run client``` (this spins up the server and opens the browser at localhost:3000).

## Built with

* React.js
* Firebase(google)
* Express.js
* Node.js
* Socket.io



