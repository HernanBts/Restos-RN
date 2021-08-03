import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAralfHmSMJoxhfUJfCDEhW0NVb8Q426K4",
    authDomain: "restosapp-59e4e.firebaseapp.com",
    projectId: "restosapp-59e4e",
    storageBucket: "restosapp-59e4e.appspot.com",
    messagingSenderId: "1013483535712",
    appId: "1:1013483535712:web:c9584598970eb69bbb3205"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  