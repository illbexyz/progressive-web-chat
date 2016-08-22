import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { saveState, loadState } from './localStorage'
import rootReducer from '../reducers'

export default function configureStore(preloadedState = loadState()) {
  store.subscribe(() => {
    saveState({
      chat: store.getState().chat,
    })
  })

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}
