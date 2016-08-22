// @flow

import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './App'
import theme from '../config/theme'

import type { Store } from 'redux'

type RootProps = {
  store: Store;
}

const Root = ({ store }: RootProps) =>
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>

export default Root
