import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");
require("firebase/storage")

const config = {

    apiKey: "AIzaSyACXPvO2MqWYsvJQbqqj4A5FmYjOuGlyuY",
    authDomain: "daniyal-perfume.firebaseapp.com",
    databaseURL: "https://daniyal-perfume-default-rtdb.firebaseio.com",
    projectId: "daniyal-perfume",
    storageBucket: "daniyal-perfume.firebasestorage.app",
    messagingSenderId: "7642518769",
    appId: "1:7642518769:web:5d897fb78677c4ea354550",
    measurementId: "G-SBSE60CJ0X"

};

const fire = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

export default fire;