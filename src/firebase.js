import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB71yWHuh2L6JOB_b91mzyEyPVdtWUhch8",
    authDomain: "reto-clima.firebaseapp.com",
    databaseURL: "https://reto-clima.firebaseio.com",
    projectId: "reto-clima",
    storageBucket: "reto-clima.appspot.com",
    messagingSenderId: "696537888280"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };