// @flow

import * as ActionTypes from '../constants/actionTypes'
import { initializeFirebase } from '../api/firebase'

import type { Action } from './'

export const initialize: Action = () => ({
  type: ActionTypes.INIT_FIREBASE,
})
