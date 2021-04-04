import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB60R31AXU15y1NmKD39lTaAhvNBozyqUk",
    authDomain: "firegram-image-upload.firebaseapp.com",
    projectId: "firegram-image-upload",
    storageBucket: "firegram-image-upload.appspot.com",
    messagingSenderId: "839936911898",
    appId: "1:839936911898:web:e29b4303c9184bb142bfa3"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
