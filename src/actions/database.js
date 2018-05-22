import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBK84eMX1RWt08jTxcArGZrAaRG7kGqCw0",
  authDomain: "go1-internal-review-system.firebaseapp.com",
  databaseURL: "https://go1-internal-review-system.firebaseio.com",
  projectId: "go1-internal-review-system",
  storageBucket: "go1-internal-review-system.appspot.com",
  messagingSenderId: "910523764328"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;