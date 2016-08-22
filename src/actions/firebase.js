// @flow

import * as ActionTypes from '../constants/actionTypes'
import * as firebaseAPI from '../api/firebase'

import type { ActionCreator, Dispatch } from 'redux'

const initialize: ActionCreator = () => ({
  type: ActionTypes.INIT_FIREBASE,
})

const restoreUser: ActionCreator = () => ({
  type: ActionTypes.RESTORE_SESSION,
})

const restoreUserSuccess: ActionCreator = (user) => ({
  type: ActionTypes.RESTORE_SESSION_SUCCESS,
  user,
})

const restoreUserFailure: ActionCreator = (error) => ({
  type: ActionTypes.RESTORE_SESSION_FAILURE,
  error,
})

export const initFirebase = () => (dispatch: Dispatch) => {
  dispatch(initialize())
  firebaseAPI.initializeFirebase()
  dispatch(restoreUser())
  firebaseAPI.restoreSession()
    .then((user) => {
      dispatch(restoreUserSuccess(user))
    })
    .catch((error) => {
      dispatch(restoreUserFailure(error))
    })
}

export const google: ActionCreator = () => ({
  type: ActionTypes.GOOGLE_SIGNIN,
})

export const googleSuccess: ActionCreator = (user) => ({
  type: ActionTypes.GOOGLE_SIGNIN_SUCCESS,
  user,
})

export const googleFailure: ActionCreator = (error) => ({
  type: ActionTypes.GOOGLE_SIGNIN_FAILURE,
  error,
})

export const googleLogin = () => (dispatch: Dispatch) => {
  dispatch(google())
  firebaseAPI.googleSignin()
    .then((result) => {
      dispatch(googleSuccess(result.user))
    })
    .catch((error) => {
      console.log(error)
      dispatch(googleFailure(error))
    })
}

const logoutCreator: ActionCreator = () => ({
  type: ActionTypes.LOGOUT,
})

const logoutSuccess: ActionCreator = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
})

const logoutFailure: ActionCreator = (error) => ({
  type: ActionTypes.LOGOUT_FAILURE,
  error,
})

export const logout = () => (dispatch: Dispatch) => {
  dispatch(logoutCreator())
  firebaseAPI.logout()
    .then(() => {
      dispatch(logoutSuccess())
    })
    .catch(() => {
      dispatch(logoutFailure())
    })
}
