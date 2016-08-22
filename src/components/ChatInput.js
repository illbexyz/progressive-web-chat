// @flow

import React, { Component } from 'react'

import { css, StyleSheet } from 'aphrodite'

import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import SendIcon from 'material-ui/svg-icons/content/send'

const styles = StyleSheet.create({
  chatInput: {
    backgroundColor: 'white',
    paddingLeft: '16px',
    borderTop: '1px solid #F5F5F5',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  editText: {

  },
  button: {
    marginLeft: '8px',
  },
})

export type ChatInputProps = {
  sendMessage: (message: string) => void;
  onStartWriting: () => void;
}

class ChatInput extends Component {

  props: {
    sendMessage: (message: string) => void;
    onStartWriting: () => void;
  }

  state: {
    value: string;
  }

  constructor(props: ChatInputProps) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    if (event.target.value !== '\n') {
      this.setState({
        value: event.target.value,
      })
    }
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.value)
    this.setState({
      value: '',
    })
  }

  sendIfEnter = (event) => {
    if (event.key === 'Enter')
      this.sendMessage()
  }

  render() {
    return (
      <div className={css(styles.chatInput)}>
        <div className={css(styles.inner)}>
          <TextField
            hintText="Message"
            fullWidth
            value={this.state.value}
            onTouchTap={() => {
              setTimeout(this.props.onStartWriting, 200)
            }}
            onChange={this.handleChange}
            onKeyPress={this.sendIfEnter}
            className={css(styles.editText)}
          />
          <IconButton
            label="Send"
            onTouchTap={this.sendMessage}
            className={css(styles.button)}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    )
  }

}

export default ChatInput
