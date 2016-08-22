// @flow

import firebase from 'firebase/app'

import type { Message } from '../reducers/chat'

const ref = firebase.database().ref('messages')

export const fetchMore = (howMany: number) => {
  ref
    .limitToLast(40)
    .orderByChild('timestamp')
    .on('child_added', (value) => null)
}

export const listenForMessages = (callback: Function) => {
  ref
    .limitToLast(40)
    .orderByChild('timestamp')
    .on('child_added', callback)
}

export const stopListeningForMessages = () => {
  ref.off()
}

export const sendMessage = (message: Message) => {
  ref.push(message)
}
