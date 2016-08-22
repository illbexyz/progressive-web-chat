// @flow

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import LoginPage from '../containers/LoginPage'
import Chat from './Chat'

import type { UserState } from '../reducers/user'

export type BodyProps = {
  user: UserState;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
})

const Body = ({ user }: BodyProps) =>
  <div className={css(styles.container)}>
    {
      user.isLoggedIn ?
        <Chat />
        :
        <LoginPage userIsAuthenticating={user.isAuthenticating} />
    }
  </div>

export default Body
