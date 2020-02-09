import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzV4K2JbJVFLkeNY3lIpm218Wr1v5Yx6w",
  authDomain: "lawsoncode-marioplan.firebaseapp.com",
  databaseURL: "https://lawsoncode-marioplan.firebaseio.com",
  projectId: "lawsoncode-marioplan",
  storageBucket: "lawsoncode-marioplan.appspot.com",
  messagingSenderId: "580209480617",
  appId: "1:580209480617:web:1442af231a0c7efe0eaab8",
  measurementId: "G-QWR6FGVBC9"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export default firebase
