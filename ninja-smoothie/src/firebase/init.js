import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgB37kljZwJ8im4RFWsxCmEvH6dUhQ5D8",
  authDomain: "smoothies-9204f.firebaseapp.com",
  databaseURL: "https://smoothies-9204f.firebaseio.com",
  projectId: "smoothies-9204f",
  storageBucket: "smoothies-9204f.appspot.com",
  messagingSenderId: "577233554289",
  appId: "1:577233554289:web:9634e08436061a3ed644d0",
  measurementId: "G-69YVRS4EMZ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore();
