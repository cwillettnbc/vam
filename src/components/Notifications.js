/**
 * App rendered in #app
 */
import React, { Component } from 'react'

class Notifications extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
    }
  };
  render() {
    return (
    <footer>
      <div className="modal" id="modalSave">
        <div className="modal__bg"></div>
        <div className="modal__content">
          <h4 className="modal__headline"><img src="/img/icon-save.svg" />Confirm</h4>
          <p className="modal__text">Are you sure you would like to save these changes?</p>
          <div className="modal__footer">
            <a href="#" className="modal__btn--cancel">Cancel</a>
            <a href="#" className="modal__btn--confirm" id="btnSaveChanges">Yes, Save!</a>
          </div>
        </div>
      </div>
      <div className="modal" id="modalCancel">
        <div className="modal__bg"></div>
        <div className="modal__content">
          <h4 className="modal__headline"><img src="/img/icon-cancel.svg" />Confirm</h4>
          <p className="modal__text">Are you sure you would like to discard your changes?</p>
          <div className="modal__footer">
            <a href="#" className="modal__btn--cancel">Cancel</a>
            <a href="#" className="modal__btn--confirm" id="btnCancelChanges">Yes, Cancel!</a>
          </div>
        </div>
      </div>
      <div className="notification" id="notificationStatus">
        <svg className="circular-loader" viewBox="0 0 50 50">
          <circle className="loader-path" cx="25" cy="25" r="20" stroke="#ffffff" strokeWidth="2" />
          <polyline className="checkmark" points="14.4,26 20.8,32.4 35.6,17.6 " stroke="#ffffff" strokeWidth="2" fill="transparent"/>
          <g className="errormark">
            <rect x="22.5" y="12.1" className="st1" width="5.1" height="15.4"/>
            <rect x="22.5" y="32.7" className="st1" width="5.1" height="5.2"/>
          </g>
        </svg>
        <span className="notification__text">&nbsp;</span>
        <span className="notification__caption">Please Try Again</span>
      </div>
    </footer>
  );
}
}

export default Notifications
