
import firebase from 'firebase'
import 'firebase/firestore'
const provider = new firebase.auth.GoogleAuthProvider();
// firebase init goes here

const config = {
    apiKey: "AIzaSyAAm-5bCOVlzXeJFb_AxUPLEHZl66dkvxc",
    authDomain: "ether-51ed0.firebaseapp.com",
    databaseURL: "https://ether-51ed0.firebaseio.com",
    projectId: "ether-51ed0",
    storageBucket: "ether-51ed0.appspot.com",
    messagingSenderId: "258682462546"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const exchanges = db.collection('exchanges')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const chatbox = db.collection('chatbox')


export {
    db,
    provider,
    auth,
    currentUser,
    usersCollection,
    exchanges,
    commentsCollection,
    likesCollection,
    chatbox
}
