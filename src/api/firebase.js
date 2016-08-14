// @flow

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const initializeFirebase = () => {
  const config = {
    apiKey: "AIzaSyBew00B_6L7Awum0y80bZUeGStntlTyEoQ",
    authDomain: "progressive-web-chat-5d18e.firebaseapp.com",
    databaseURL: "https://progressive-web-chat-5d18e.firebaseio.com",
    storageBucket: "progressive-web-chat-5d18e.appspot.com",
  }
  firebase.initializeApp(config);
}
