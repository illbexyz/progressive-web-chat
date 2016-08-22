// @flow

import * as ActionTypes from '../constants/actionTypes'

import type { Action, Reducer, State } from 'redux'

export type UserState = {
  isLoggedIn: boolean;
  isAuthenticating: boolean;
  data?: Object;
  authError?: Object;
}

const initialState: UserState = {
  isLoggedIn: false,
  isAuthenticating: false,
  data: undefined,
  authError: undefined,
}

const user: Reducer<UserState, Action> = (
  state: UserState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.GOOGLE_SIGNIN:
      return {
        ...state,
        isAuthenticating: true,
      }
    case ActionTypes.GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isLoggedIn: true,
        data: action.user,
      }
    case ActionTypes.GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        authError: action.error,
      }
    case ActionTypes.RESTORE_SESSION:
      return {
        ...state,
        isAuthenticating: true,
      }
    case ActionTypes.RESTORE_SESSION_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isLoggedIn: true,
        data: action.user,
      }
    case ActionTypes.RESTORE_SESSION_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        authError: action.error,
      }
    case ActionTypes.LOGOUT:
      return {
        ...state,
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    case ActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export const selectUser = (state: State) => {
  if (state.user.isLoggedIn) {
    const { uid, displayName, photoURL } = state.user.data
    return {
      uid,
      displayName,
      photoURL,
    }
  } else {
    return undefined
  }
}

export default user
