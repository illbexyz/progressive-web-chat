// @flow

import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import CircularProgress from 'material-ui/CircularProgress'

import { primaryColor } from '../config/theme'

const styles = StyleSheet.create({
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: primaryColor,
  },
  textHint: {
    marginTop: '24px',
  }
})

export type PlaceholderProps = {
  text: string;
}

const Placeholder = ({text}: PlaceholderProps) =>
  <div className={css(styles.placeholder)}>
    <CircularProgress />
    <p className={css(styles.textHint)}>{text}</p>
  </div>

export default Placeholder
