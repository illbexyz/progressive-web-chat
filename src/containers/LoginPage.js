import { connect } from 'react-redux'

import LoginPage from '../components/LoginPage'
import { googleLogin } from '../actions/firebase'

const mapStateToProps = (state) => ({
  authError: state.user.authError,
  userIsAuthenticating: state.user.isAuthenticating,
})

export default connect(mapStateToProps, { login: googleLogin })(LoginPage)
