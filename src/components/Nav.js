/**
 *  Nav Component : Logo and Back Button
 */
import React, { Component } from 'react'

class Nav extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
    }
  };
  render() {
    const hostname = window.location.protocol + "//" + window.location.host + "/sitechooser/choose/reset";
    return (
        <nav className="nav">
          <a className="nav__logo" href="/">

            <img src="/img/logo-mps.svg"/>
          </a>
          <div className="nav__aside">
            <a className="nav__link" href={hostname}><img src="/img/arrow-left.svg"/> <span>Return to </span>MPS</a>
          </div>
        </nav>
    );
  }
}

export default Nav