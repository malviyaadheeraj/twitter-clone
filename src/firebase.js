import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZh0BR3IADutIJZFfX-25ht3kbMPvehI0",
  authDomain: "twitter-clone-38309.firebaseapp.com",
  projectId: "twitter-clone-38309",
  storageBucket: "twitter-clone-38309.appspot.com",
  messagingSenderId: "486140284416",
  appId: "1:486140284416:web:2a744c23787f337eaed2e5",
  measurementId: "G-GN4XXQ84F2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
