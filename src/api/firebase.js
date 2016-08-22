// @flow

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import { apiKey } from '../config/firebase'

const config = {
  apiKey: apiKey,
  authDomain: "progressive-web-chat-5d18e.firebaseapp.com",
  databaseURL: "https://progressive-web-chat-5d18e.firebaseio.com",
}
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const initializeFirebase = () => {
  // const config = {
  //   apiKey: "apiKey",
  //   authDomain: "progressive-web-chat-5d18e.firebaseapp.com",
  //   databaseURL: "https://progressive-web-chat-5d18e.firebaseio.com",
  //   storageBucket: "progressive-web-chat-5d18e.appspot.com",
  // }
  // firebase.initializeApp(config);
}

export const googleSignin = () =>
  firebase.auth().signInWithPopup(provider)

export const restoreSession = () => {
  return new Promise((resolve, reject) => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      unsub()
      if (user) {
        resolve(user)
      } else {
        reject("Can't restore session")
      }
    })
  })
}

export const logout = () => {
  return firebase.auth().signOut()
}
