import firebase from 'firebase/app';
// importing just firestore & auth
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "https://project-planner-react.firebaseio.com",
    projectId: "project-planner-react",
    storageBucket: "project-planner-react.appspot.com",
    messagingSenderId: ""
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
