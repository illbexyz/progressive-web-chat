// @flow

import * as ActionTypes from '../constants/actionTypes'
import * as chatApi from '../api/chat'

import type { ActionCreator, Dispatch } from 'redux'
import type { Message } from '../reducers/chat'

const fetchM: ActionCreator = () => ({
  type: ActionTypes.FETCH_MESSAGES,
})

const messageReceived: ActionCreator = (message: Message) => ({
  type: ActionTypes.MESSAGE_RECEIVED,
  message,
})

export const fetchMessages = () => (dispatch: Dispatch) => {
  dispatch(fetchM())
  chatApi.listenForMessages((message) => {
    dispatch(messageReceived({...message.val(), key: message.key}))
  })
}

const send: ActionCreator = (message: Message) => ({
  type: ActionTypes.SEND_MESSAGE,
  message,
})

export const sendMessage = (message: Message) => (dispatch: Dispatch) => {
  dispatch(send(message))
  chatApi.sendMessage(message)
}
