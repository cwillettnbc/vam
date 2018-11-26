/**
 * Edit Component
 */
import React, {Component} from 'react'
import ConfigFreewheel from './ConfigFreewheel'
import FeatureToggles from './FeatureToggles'
import PostConfigDataAPI from '../config/PostConfigDataAPI'
import { setConfig, getState } from '../actions'
import { connect } from 'react-redux'

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

class EditContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggleAB: true
    };
  }
  cancelModal = () => {
    console.warn('cancelModal Clicked. return to edit');
  };

  render() {
    return (
      <section className="main__content visible" id="sectionEdit">
        <form className="section__parameters--cols" id="configValues" method="post">
          <FeatureToggles/>
          <ConfigFreewheel/>
        </form>
        <div className="section__footer">
          <a href="#" className="btn" id="btnCancelParameters" onClick={this.cancelModal}>Cancel</a>
          <a href="#" className="btn" id="btnSaveParameters" onClick={() => this.props.setConfig(PostConfigDataAPI())}>Save Button</a>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer)
