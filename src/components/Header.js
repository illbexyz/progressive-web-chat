// @flow

import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

export type HeaderProps = {
  userIsLoggedIn: boolean;
  logout: () => void;
}

const Header = ({ userIsLoggedIn, logout }: HeaderProps) =>
  <div>
    <AppBar
      title="Progressive Chat"
      showMenuIconButton={false}
      iconElementRight={userIsLoggedIn ? <FlatButton label="Logout" onTouchTap={logout}/> : null}
    />
  </div>

export default Header
