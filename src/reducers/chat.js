// @flow
import * as ActionTypes from '../constants/actionTypes'
import type { Action, Reducer, State } from 'redux'

export type User = {
  uid: string;
  displayName: string;
  photoURL: string;
}

export type Message = {
  from: User;
  value: string;
  key: string;
  timestamp: number;
}

export const message = (from: User, value: string) => ({
  from,
  value,
  timestamp: Date.now(),
})

// export type ChatState = {
//   messages: Array<Message>;
// }

export type ChatState = {
  messages: Object;
}

const initialState: ChatState = {
  messages: {},
  isFetchingMessages: false,
}

const chat: Reducer<ChatState, Action> = (
  state: ChatState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES:
      return {
        ...state,
        isFetchingMessages: true,
      }
    case ActionTypes.MESSAGE_RECEIVED:
      return {
        ...state,
        messages: { ...state.messages, [action.message.key]: action.message },
        isFetchingMessages: false,
      }
    default:
      return state
  }
}

export const getMessages: (state: State) => Array<Message> = (state) => {
  return Object.keys(state.chat.messages).map((key) => state.chat.messages[key])
}

export default chat
