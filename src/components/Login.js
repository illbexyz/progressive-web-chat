// @flow

import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

type LoginProps = {
  login: Function;
}

const Login = ({ login }: LoginProps) =>
  <div>
    <FlatButton
      label="Login with Google"
      primary
      onTouchTap={login}
      icon={<FontIcon className="fa fa-google" />}
    />
  </div>

export default Login
