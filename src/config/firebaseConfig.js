import firebase from 'firebase/app';
// importing just firestore & auth
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpiN_bVsraJvkjPh2-tzTBKb_Ut1vaOQ4",
    authDomain: "project-planner-react.firebaseapp.com",
    databaseURL: "https://project-planner-react.firebaseio.com",
    projectId: "project-planner-react",
    storageBucket: "project-planner-react.appspot.com",
    messagingSenderId: "229870695889"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
