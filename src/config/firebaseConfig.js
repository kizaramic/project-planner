import firebase from 'firebase/app';
// importing just firestore & auth
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCzRp7Z4ADVbXKCotBVvirggMOCi2waQCE",
    authDomain: "planner-react.firebaseapp.com",
    databaseURL: "https://planner-react.firebaseio.com",
    projectId: "planner-react",
    storageBucket: "planner-react.appspot.com",
    messagingSenderId: "677887885350"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
