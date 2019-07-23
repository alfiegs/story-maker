import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAsJtUzHtT7j6rc0pSLXJj1rZIkIhvUHxY",
    authDomain: "story-maker-39b25.firebaseapp.com",
    databaseURL: "https://story-maker-39b25.firebaseio.com",
    projectId: "story-maker-39b25",
    storageBucket: "",
    messagingSenderId: "477747225128",
    appId: "1:477747225128:web:46c7391ce6eec3b4"
};
firebase.initializeApp(firebaseConfig);

export default firebase;