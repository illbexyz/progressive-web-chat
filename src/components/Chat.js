// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import { fetchMessages, sendMessage } from '../actions/chat'
import ChatInput from './ChatInput'
import MessageBox from './MessageBox'
import Placeholder from './Placeholder'

import { selectUser } from '../reducers/user'
import { message, getMessages } from '../reducers/chat'
import type { Message, User } from '../reducers/chat'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    fontFamily: 'Open Sans, sans-serif',
  },
  placeholderContainer: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat: {
    overflowY: 'scroll',
  },
})

class Chat extends Component {

  props: {
    messages: Array<Message>;
    isFetchingMessages: boolean;
    user: User;
    fetchMessages: () => void;
    sendMessage: () => void;
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  componentDidUpdate() {
    setTimeout(this._scrollChatDown, 200)
  }

  _joinSameUserMessages = (messageList: Array<Message>) => {
    if (messageList.length > 0) {
      return messageList.slice(1).reduce(
        (prev, curr) => prev[prev.length - 1].from.uid === curr.from.uid ?
          [...prev.slice(0, -1), {...prev[prev.length - 1], value: `${prev[prev.length - 1].value}\n${curr.value}`}]
          :
          [...prev, curr]
        ,
        [messageList[0]]
      )
    } else {
      return []
    }
  }

  _renderMessage = (message: Message) => (
    <MessageBox
      key={message.key}
      message={message}
      isFromUser={message.from.uid === this.props.user.uid}
    />
  )

  _sendMessage = (messageText: string) => {
    if (messageText !== '') {
      const m = message(this.props.user, messageText)
      this.props.sendMessage(m)
      this._scrollChatDown()
    }
  }

  _onChatScroll = (event) => {
    if (event.target.scrollTop === 0) {
      // TODO: fetch more
    }
  }

  _scrollChatDown = () => {
    const chat = this.refs.chat
    if (chat)
      chat.scrollTop = chat.scrollHeight
  }

  render() {
    const joinedMessages = this._joinSameUserMessages(this.props.messages)
    const placeholder =
      <div className={css(styles.placeholderContainer)}>
        <Placeholder text={'Fetching messages...'} />
      </div>
    const chat =
      <div className={css(styles.container)}>
        <div className={css(styles.chat)} ref='chat' onScroll={this._onChatScroll}>
          {joinedMessages.map(this._renderMessage)}
        </div>
        <ChatInput
          onStartWriting={this._scrollChatDown}
          sendMessage={this._sendMessage}
        />
      </div>
    return this.props.isFetchingMessages && !this.props.messages.length ?
      placeholder
      :
      chat
  }

}

const mapStateToProps = (state) => ({
  messages: getMessages(state),
  isFetchingMessages: state.chat.isFetchingMessages,
  user: selectUser(state),
})

export default connect(
  mapStateToProps,
  {
    fetchMessages,
    sendMessage,
  }
)(Chat)
