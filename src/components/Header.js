/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "./../img/pokeball-16799.png";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img className="img-logo" src={Logo} alt="" />
        </div>
        <div className="header-right">
          <a>Login</a>
        </div>
      </div>
    );
  }
}
export default Header;
