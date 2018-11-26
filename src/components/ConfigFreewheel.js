/**
 * ConfigFreewheel Container
 */

import React, { Component } from 'react'
import ConfigMap from './ConfigABTesting'
import Environments from './Environments'
import PropTypes from "prop-types"
import { setConfig, getState } from '../actions'
import { connect } from 'react-redux'
//import Form from './FormInputs';

// Fetch initial state
const mapStateToProps = state => ({
  state: getState(state)
});

// Dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    setConfig: data => {
      dispatch(setConfig(data))
    }
  }
};


class ConfigFreewheel extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      inputRESP: 'json'
    }
  };
  static propTypes = {
    state: PropTypes.object.isRequired
  };

  render() {
    const { } = this.props;
    console.warn('Freewheel=>props:',this.props);
    return (
        <div className="section__parameters--col2">
          <h3 className="section__headline">Parameters</h3>
          <div className="section__parameters--content">
            <div className="parameters__content">
            <Environments/>
              <h4 className="section__headline">Base Parameters</h4>
              <div className="parameters__group--base">
                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputNW">Network ID (nw)</label>
                  <input className="parameters__input" type="text" id="inputNW"/>
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputAFID">afid</label>
                  <input className="parameters__input" type="text" id="inputAFID"/>
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputCSID">csid</label>
                  <input className="parameters__input" type="text" id="inputCSID" />
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputSFID">sfid</label>
                  <input className="parameters__input" type="text" id="inputSFID"/>
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputMETR">metr</label>
                  <input className="parameters__input" type="text" id="inputMETR" />
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputPROF">prof</label>
                  <input className="parameters__input" type="text" id="inputPROF"/>
                </div>

                <div className="parameters__input--group">
                  <label className="parameters__input--label" htmlFor="inputRESP">resp</label>
                  <div className="selectric-wrapper selectric-parameters__dropdown">
                    <div className="selectric-hide-select">
                      <select className="parameters__dropdown" id="inputRESP" tabIndex="-1">
                        <option value="xml">xml</option>
                        <option value="ad">ad</option>
                        <option value="smrx">smrx</option>
                        <option value="xml">xml</option>
                        <option value="json">json</option>
                        <option value="vast2">vast2</option>
                        <option value="vmap1">vmap1</option>
                      </select>
                    </div>
                    <div className="selectric"><span className="label">xml</span><b className="button">▾</b></div>
                    <div className="selectric-items" tabIndex="-1">
                      <div className="selectric-scroll">
                        <ul>
                          <li data-index="0" className="selected">xml</li>
                          <li data-index="1" className="">ad</li>
                          <li data-index="2" className="">smrx</li>
                          <li data-index="3" className="">xml</li>
                          <li data-index="4" className="">json</li>
                          <li data-index="5" className="">vast2</li>
                          <li data-index="6" className="last">vmap1</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              { this.props.state.features.ABTesting ? <ConfigMap/> : null }
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigFreewheel);