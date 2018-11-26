/**
 * ConfigMap Container : A/B Map
 */

import React, { Component } from 'react'
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import { getState } from '../actions'
import { connect } from 'react-redux'
//import Form from './FormInputs';

// Fetch initial state
const mapStateToProps = state => ({
  state: getState(state)
});


class ConfigABTesting extends Component {
  constructor(props, context) {
    super(props);
  }
  static propTypes = {
    state: PropTypes.object.isRequired
  };
  render() {
    const { } = this.props;
    console.warn('ConfigAB=>state:',this.props.state);
    return (
      <div className="parameters__group--ab" id="groupABTesting">
        <h4 className="section__headline">A/B Testing</h4>
        <div className="parameters__ab--group" id="abVariant1">
          <div className="parameters__ab--left">
            <div className="ab__item">
              <label className="parameters__input--label">Name</label>
              <input className="parameters__input" type="text"/>
            </div>
            <div className="ab__item">
              <label className="parameters__input--label">audience_id</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">variant_id</label>
              <input className="parameters__input" type="text"/>
            </div>
            <div className="ab__item">
              <label className="parameters__input--label">extmp_id</label>
              <input className="parameters__input" type="text"/>
            </div>

          </div>
          <div className="parameters__ab--right">

          </div>
        </div>
        <div className="parameters__ab--group hidden" id="abVariant2">
          <div className="parameters__ab--left">
            <div className="ab__item">
              <label className="parameters__input--label">Name</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">audience_id</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">variant_id</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">extmp_id</label>
              <input className="parameters__input" type="text"/>
            </div>

          </div>
          <div className="parameters__ab--right">
            <a href="#" className="btn--remove" id="btnRmAB2">Remove</a>
          </div>
        </div>
        <div className="parameters__ab--group hidden" id="abVariant3">
          <div className="parameters__ab--left">
            <div className="ab__item">
              <label className="parameters__input--label">Name</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">audience_id</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">variant_id</label>
              <input className="parameters__input" type="text"/>
            </div>

            <div className="ab__item">
              <label className="parameters__input--label">extmp_id</label>
              <input className="parameters__input" type="text"/>
            </div>

          </div>
          <div className="parameters__ab--right">
            <a href="#" className="btn--remove" id="btnRmAB3">Remove</a>
          </div>
        </div>
        <a href="#" className="btn--ab" id="btnAddAB">
          <img src="../public/assets/img/icon-plus.svg"/>
          <span>Add Variant</span>
        </a>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(ConfigABTesting));