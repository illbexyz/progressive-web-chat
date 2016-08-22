// @flow

import React from 'react'
import Avatar from 'material-ui/Avatar'
import { css, StyleSheet } from 'aphrodite'

import { primaryColor, accentColor } from '../config/theme'

import type { Message } from '../reducers/chat'

export type MessageProps = {
  message: Message;
  isFromUser: boolean;
}

const styles = StyleSheet.create({
  messageBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4px 16px 4px 16px',
  },
  userTitleBox: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '40px',
  },
  username: {
    marginLeft: '8px',
    color: accentColor,
    fontSize: 'small',
    fontWeight: 'bold',
  },
  messageBody: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '40px',
    padding: '8px 8px 8px 0',
  },
  messageString: {
    whiteSpace: 'pre-wrap',
    padding: '8px 12px 8px 12px',
    lineHeight: '20px',
    fontSize: 'small',
    borderRadius: '16px',
    transition: 'all 2s linear',
  },
  marginLeft: {
    marginLeft: '16px',
  },
  marginRight: {
    marginRight: '16px',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  userColor: {
    backgroundColor: primaryColor,
    color: 'white',
  },
  othersColor: {
    backgroundColor: '#EEEEEE',
  },
})

const MessageBox = ({ message, isFromUser }: MessageProps) =>
  isFromUser ?
    <div className={css(styles.messageBox)}>
      <div className={css(styles.messageBody, styles.reverse)}>
        <p className={css(styles.messageString, styles.userColor)}>{message.value}</p>
      </div>
    </div>
  :
    <div className={css(styles.messageBox)}>
      <div className={css(styles.userTitleBox)}>
        <Avatar src={message.from.photoURL} />
        <p className={css(styles.username)}>{message.from.displayName}</p>
      </div>
      <div className={css(styles.messageBody)}>
        <p className={css(styles.messageString, styles.othersColor)}>{message.value}</p>
      </div>
    </div>


export default MessageBox
