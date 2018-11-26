/**
 * Mode Component : VOD or Live
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setMode, getState } from '../actions'
import { connect } from 'react-redux'

// Fetch initial state
const mapStateToProps = state => ({
  state: getState(state)
});

// Dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    setMode: name => {
      dispatch(setMode(name))
    }
  }
};

class Platform extends Component {
  constructor(props, context) {
    super(props);
  };
  render() {
    return (
      <section className="main__content visible" id="sectionMode">
        <div className="content__wrapper">
          <Link  to='/edit' className="card vod" href="#" data-name="VOD" onClick={() => this.props.setMode('VOD')}>
            <img src="/img/logos/logo-vod.svg" title="VOD" data-name="VOD"/>
            <span className="card__title">Video on Demand</span>
          </Link>
          <Link  to='/edit' className="card live" href="#" data-name="Live" onClick={() => this.props.setMode('Live')}>
            <img src="/img/logos/logo-live.svg" title="Live" data-name="Live"/>
            <span className="card__title">Live</span>
          </Link>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform)