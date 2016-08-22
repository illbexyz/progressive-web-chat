// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Paper from 'material-ui/Paper'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { initFirebase, logout } from '../actions/firebase'

import type { UserState } from '../reducers/user'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  colorBar: {
    position: 'fixed',
    zIndex: -1,
    backgroundColor: '#0D47A1',
    width: '100%',
    height: '127px',
    content: '',
    top: 0,
    left: 0,
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    zIndex: 1,
    position: 'relative',
    backgroundColor: '#E0E0E0',
    '@media screen and (min-width: 1200px)': {
      maxWidth: '918px',
      maxHeight: 'calc(100% - 38px)',
      margin: '0 auto',
      top: '19px',
      borderRadius: '3px',
    },
    '@media screen and (min-width: 1320px)': {
      maxWidth: '1076px',
    },
    '@media screen and (min-width: 1440px)': {
      maxWidth: '1180px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
})

class App extends Component {

  props: {
    user: UserState,
    initialize: () => void,
    logout: () => void,
  }

  componentWillMount() {
    this.props.initialize()
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <Paper className={css(styles.app)} >
          <div className={css(styles.colorBar)}></div>
          <div className={css(styles.content)}>
            <Header userIsLoggedIn={this.props.user.isLoggedIn} logout={this.props.logout} />
            <Body user={this.props.user}/>
            <Footer />
          </div>
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const user: UserState = state.user
  return {
    user,
  }
}

export default connect(mapStateToProps, { initialize: initFirebase, logout })(App)
