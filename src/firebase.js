import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcyRUZ1nBKiDcxdwbZOBqHlnBZDG8FfFA",
    authDomain: "netflix-clone-e151f.firebaseapp.com",
    projectId: "netflix-clone-e151f",
    storageBucket: "netflix-clone-e151f.appspot.com",
    messagingSenderId: "256778414206",
    appId: "1:256778414206:web:8d011d4d94fbbe40dc502f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
