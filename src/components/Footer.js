import React from "react";
import Logo from "./../img/pokeball-16799.png";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <p>
            The href attribute is required for an anchor to be keyboard
            accessible.
          </p>
        </div>
        <ul className="footer-list">
          <li>Layanan</li>
          <li>Hubungi Kami</li>
          <li>Bantuan</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
