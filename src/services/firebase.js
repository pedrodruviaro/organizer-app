import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTmEHnZ7nq-pCLbS60_PsxdshSz5q0NFc",
    authDomain: "organizer-1e97a.firebaseapp.com",
    databaseURL: "https://organizer-1e97a-default-rtdb.firebaseio.com",
    projectId: "organizer-1e97a",
    storageBucket: "organizer-1e97a.appspot.com",
    messagingSenderId: "707587264965",
    appId: "1:707587264965:web:035a6110994ea4d870fbac"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export {
    auth,
    database,
    firebase
}