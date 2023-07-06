
 import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCUktnHJhs5DZ3_sPSDVSJshixn8ipPbws",
    authDomain: "projectify-2a7ad.firebaseapp.com",
    projectId: "projectify-2a7ad",
    storageBucket: "projectify-2a7ad.appspot.com",
    messagingSenderId: "538425547581",
    appId: "1:538425547581:web:c58dc942b52e1f53fe4354"
  };

  firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage ,timestamp }