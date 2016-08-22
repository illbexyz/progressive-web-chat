// @flow

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import LoginBox from './LoginBox'
import Placeholder from './Placeholder'

export type LoginPageProps = {
  userIsAuthenticating: boolean;
  authError: Object;
  login: () => void;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LoginPage = ({ userIsAuthenticating, authError, login }: LoginPageProps) =>
  <div className={css(styles.container)}>
    {
        userIsAuthenticating ?
          <Placeholder text={'User is authenticating...'}/>
          :
          <LoginBox authError={authError} login={login} />
    }
  </div>

export default LoginPage
