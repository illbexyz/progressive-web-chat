// @flow

import { connect } from 'react-redux'

import Body from '../components/Body'

const mapStateToProps = (state) => {
  const { isLoggedIn, isAuthenticating, data, authError } = state.user
  return {
    userIsLoggedIn: isLoggedIn,
    userIsAuthenticating: isAuthenticating,
    data,
    authError
  }
}

export default connect(mapStateToProps)(Body)
