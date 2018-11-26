/**
 * Feature Toggle Component
 */

import React, { Component } from 'react'
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { getState } from '../actions'
import { connect } from 'react-redux'

// Fetch initial state
const mapStateToProps = state => ({
  state: getState(state)
});


class FeatureToggles extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      features: {
        'ABTesting': true
      }
    };
  }
  static propTypes = {
    state: PropTypes.object.isRequired
  };
  // Toggle Features
  toggleChecked = () => {
    this.setState({ features: {'ABTesting': !this.props.state.features.ABTesting }});
  };

  render() {
    const { } = this.props;
    console.warn('FeatureToggles=>state:',!this.props.state.features.ABTesting);
    return (
        <div className="section__parameters--col1">
          <h3 className="section__headline">Features</h3>
          <div className="section__parameters--content">
            <div className="features">
              <div className="feature__switch--wrapper">
                <input className="feature__switch" type="checkbox"  id="ABTesting" defaultChecked={this.props.state.features.ABTesting} onChange={() => this.toggleChecked} />
                <label className="feature__switch--label" htmlFor="toggleAB">Toggle</label>
                <span className="feature__switch--text">A/B Testing</span>
              </div>
              {/*<div className="feature__switch--wrapper">
                <input className="feature__switch" type="checkbox" id="toggleOpenMeasure" disabled="disabled"/>
                <label className="feature__switch--label" htmlFor="toggleOpenMeasure">Toggle</label>
                <span className="feature__switch--text">Open Measurement</span>
              </div>
              <div className="feature__switch--wrapper">
                <input className="feature__switch" type="checkbox" id="toggleBrightline" disabled="disabled"/>
                <label className="feature__switch--label" htmlFor="toggleBrightline">Toggle</label>
                <span className="feature__switch--text">Brightline</span>
              </div>
              <div className="feature__switch--wrapper">
                <input className="feature__switch" type="checkbox" id="toggleComscore" disabled="disabled"/>
                <label className="feature__switch--label" htmlFor="toggleComscore">Toggle</label>
                <span className="feature__switch--text">comScore</span>
              </div>
              <div className="feature__switch--wrapper">
                <input className="feature__switch" type="checkbox" id="toggleNielsen" disabled="disabled"/>
                <label className="feature__switch--label" htmlFor="toggleNielsen">Toggle</label>
                <span className="feature__switch--text">Nielsen Analytics</span>
              </div>*/}
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps)(FeatureToggles);