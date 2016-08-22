import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { saveState, loadState } from './localStorage'
import rootReducer from '../reducers'

export default function configureStore(preloadedState = loadState()) {
  // if (!preloadedState.user.isLoggedIn) preloadedState = null
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger()),
  )

  console.log('persisted', preloadedState)

  store.subscribe(() => {
    saveState({
      chat: store.getState().chat,
    })
  })

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
