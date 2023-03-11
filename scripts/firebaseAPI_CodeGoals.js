import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-Y6qGRcvG87Hgbgtw5tlnHKqukDbBfHM",
    authDomain: "hackthebreak-outsiders.firebaseapp.com",
    projectId: "hackthebreak-outsiders",
    storageBucket: "hackthebreak-outsiders.appspot.com",
    messagingSenderId: "758715030457",
    appId: "1:758715030457:web:fd91fc7b4a408ce9957468"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();