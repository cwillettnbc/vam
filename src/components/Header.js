/**
 * Header View
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { getState } from '../actions'
import { connect } from 'react-redux'

// Fetch initial state
const mapStateToProps = props => ({
  state: getState(props)
});


class Header extends Component {
  constructor(props, context) {
    super(props);
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
  };
  render() {
    const { match, location, history } = this.props;
    //console.warn('this.props: ', this.props);

    // Highlights circles when active
    let pathname = window.location.pathname;
    pathname = pathname[0] == '/' ? pathname.substr(1) : pathname;
    let is_platform = pathname.indexOf("platform") > -1,
        is_mode = pathname.indexOf("mode") > -1,
        is_edit = pathname.indexOf("edit") > -1,
        is_brand = (pathname == "" || pathname == "/") && !is_platform && !is_mode && !is_edit;

    return (
        <header className="main__header">
          {!is_edit && <h3 className="header__headline">Select the <span className="header__headline--variable">{is_brand?'brand':pathname.split('/')[1]}</span> you would like to create an ad parameters for.</h3>}
          {is_edit && <h3 className="header__headline">Edit Parameters</h3>}
          <div className="header__steps">
            <div id="headerItemBrand" className={"header__steps--step " + (is_brand || is_platform || is_mode || is_edit ? "active" : "")}>
              <Link to='/'>
            <span className="step__number">
              <svg x="0px" y="0px" width="45px" height="45px" viewBox="0 0 45 45">
                <circle cx="22.5" cy="22.5" r="22.5"></circle>
                <path d="M24.5,14.5c0.3,0.3,0.4,0.6,0.4,1v13.9c0,0.4-0.2,0.8-0.5,1c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4c-0.3-0.3-0.4-0.6-0.4-1V18.1L20.3,19c-0.2,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.7-0.2-1-0.5c-0.3-0.3-0.4-0.6-0.4-1c0-0.3,0.1-0.5,0.2-0.7c0.1-0.2,0.3-0.4,0.5-0.5l3.6-2.2c0.3-0.1,0.6-0.2,1-0.2C23.9,14.1,24.2,14.2,24.5,14.5z"></path>
              </svg>
            </span>
              </Link>
              <h4 className="step__headline">Brand</h4>
              <p className="step__subline" id="titleBrand">{this.props.state.brand}</p>
            </div>
            <div id="headerItemPlatform" className={"header__steps--step " + (is_platform || is_mode || is_edit ? "active" : "")}>
              <Link to='/platform'>
            <span className="step__number">
              <svg x="0px" y="0px" width="45px" height="45px" viewBox="0 0 45 45">
                <circle cx="22.5" cy="22.5" r="22.5"></circle>
                <path d="M27.6,28.8c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.2-0.6,0.4-1,0.4h-8.2c-0.4,0-0.7-0.1-1-0.4c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1l5.2-5.6c0.6-0.6,1.1-1.3,1.4-1.9c0.3-0.6,0.5-1.2,0.5-1.8c0-0.7-0.3-1.3-0.8-1.9c-0.5-0.5-1.1-0.8-1.8-0.8c-0.5,0-0.9,0.2-1.4,0.5c-0.5,0.3-0.9,0.7-1.3,1.2c-0.3,0.4-0.7,0.6-1.1,0.6c-0.4,0-0.7-0.1-1-0.4S17,17.9,17,17.6c0-0.2,0.1-0.5,0.2-0.7c0.2-0.2,0.4-0.5,0.7-0.9c0.6-0.6,1.3-1.1,2.1-1.5c0.8-0.4,1.6-0.6,2.3-0.6c1.1,0,2,0.2,2.8,0.7c0.8,0.4,1.4,1.1,1.8,1.8c0.4,0.8,0.6,1.7,0.6,2.7c0,1-0.3,2-0.8,3c-0.5,1-1.2,2-2.1,3l-3,3.2h4.9C27,28.4,27.4,28.5,27.6,28.8z"></path>
              </svg>
            </span>
              </Link>
              <h4 className="step__headline">Platform</h4>
              <p className="step__subline" id="titlePlatform">{this.props.state.platform}</p>
            </div>
            <div id="headerItemMode" className={"header__steps--step " + (is_mode || is_edit ? "active" : "")}>
              <Link to='/mode'>
            <span className="step__number">
              <svg x="0px" y="0px" width="45px" height="45px" viewBox="0 0 45 45">
                <circle cx="22.5" cy="22.5" r="22.5"></circle>
                <path d="M25.8,20.9c0.7,0.5,1.2,1.1,1.6,1.9c0.4,0.8,0.6,1.6,0.6,2.5c0,1.2-0.3,2.2-0.8,3.1c-0.5,0.9-1.3,1.5-2.2,2S22.8,31,21.5,31c-0.6,0-1.2-0.1-1.7-0.2s-1.1-0.3-1.5-0.6c-0.6-0.3-0.9-0.8-0.9-1.3c0-0.4,0.1-0.7,0.4-1.1s0.6-0.5,1-0.5c0.3,0,0.7,0.1,1,0.4c0.7,0.5,1.4,0.8,2.3,0.8c0.5,0,1-0.1,1.4-0.4s0.8-0.6,1.1-1.1c0.3-0.5,0.4-1,0.4-1.6c0-0.9-0.3-1.5-0.8-2c-0.5-0.5-1.1-0.7-1.9-0.7c-0.3,0-0.6,0-0.8,0.1c-0.2,0.1-0.4,0.1-0.4,0.1c-0.4,0.1-0.8,0.2-1,0.2c-0.4,0-0.6-0.1-0.8-0.4s-0.3-0.6-0.3-0.9c0-0.2,0-0.4,0.1-0.6s0.2-0.4,0.4-0.6l3.7-4.1h-4.8c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.7,0.4-0.9c0.3-0.2,0.6-0.4,1-0.4h7.3c0.5,0,0.8,0.1,1.1,0.4c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.2,0.8-0.6,1.2l-3.2,3.6C24.3,20.2,25.1,20.4,25.8,20.9z"></path>
              </svg>
            </span>
              </Link>
              <h4 className="step__headline">Mode</h4>
              <p className="step__subline" id="titleMode">{this.props.state.mode}</p>
            </div>
            <div id="headerItemEdit" className={"header__steps--step " + (is_edit ? "active" : "")}>
              <Link to='/edit'>
            <span className="step__number">
              <svg x="0px" y="0px" width="45px" height="45px" viewBox="0 0 45 45">
                <circle cx="22.5" cy="22.5" r="22.5"></circle>
                <path d="M31.2,17.5l-1.8,1.8l-3.7-3.7l1.8-1.8c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l2.3,2.3c0.2,0.2,0.3,0.4,0.3,0.7S31.4,17.3,31.2,17.5z M13.5,27.8l11.1-11.1l3.7,3.7L17.2,31.5h-3.7V27.8z"></path>
              </svg>
            </span>
              </Link>
              <h4 className="step__headline">Edit</h4>
            </div>
          </div>
        </header>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Header));