import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0fPFifLH4rnxWrgIhnZcL_pobqKo9O7E",
    authDomain: "catch-of-the-day-2-adam-smith.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-2-adam-smith-default-rtdb.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
