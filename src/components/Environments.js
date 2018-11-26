/**
 *  Nav Component : Logo and Back Button
 */
import React, { Component } from 'react'

class Environments extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      checkEnvQA: true,
      checkEnvStaging: false,
      checkEnvProd: false
    }
  };
  render() {
    return (
      <div>
        <h4 className="section__headline">Ads Module Environment</h4>
        <div className="parameters__group--environment">
          <div className="parameters__select--wrapper">
            <input className="parameters__select" type="radio" id="checkEnvQA" name="checkEnv" defaultChecked={this.state.checkEnvQA} readyonly="true" />
            <label className="parameters__select--label" htmlFor="checkEnvQA">QA</label>
          </div>
          <div className="parameters__select--wrapper">
            <input className="parameters__select" type="radio" id="checkEnvStaging" name="checkEnv" defaultChecked={this.state.checkEnvStage} readyonly="true" />
            <label className="parameters__select--label" htmlFor="checkEnvStaging">Staging</label>
          </div>
          <div className="parameters__select--wrapper">
            <input className="parameters__select" type="radio" id="checkEnvProd" name="checkEnv" defaultChecked={this.state.checkEnvProd} readyonly="true" />
            <label className="parameters__select--label" htmlFor="checkEnvProd">Production</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Environments