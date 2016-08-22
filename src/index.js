// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/Root'
import createStore from './store/configureStore'

injectTapEventPlugin();

const store = createStore()

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)
