// @flow

import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import Login from './Login'

export type LoginBoxProps = {
  authError: Object;
  login: Function;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  hint: {
    fontSize: 'large',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
})

export const LoginBox = ({ authError, login }: LoginBoxProps) =>
  <div className={css(styles.container)}>
    <Login login={login}/>
  </div>

export default LoginBox
