import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDM1SyAMNmdE5j4iOEnOT7qN7z9VeiRVy8",
    authDomain: "passiofina-reactjs.firebaseapp.com",
    projectId: "passiofina-reactjs",
    storageBucket: "passiofina-reactjs.appspot.com",
    messagingSenderId: "658143182607",
    appId: "1:658143182607:web:58020898a30b5c73f6087a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app)
}