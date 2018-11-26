/**
 * Platform Container
 */

import React, { Component } from 'react'
import GetPlatforms from '../config/GetPlatformAPI'
import { Link } from 'react-router-dom'
import { setPlatform, getState } from '../actions'
import { connect } from 'react-redux'


// Fetch initial state
const mapStateToProps = state => ({
  state: getState(state)
});

// Dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    setPlatform: name => {
      dispatch(setPlatform(name))
    }
  }
};

class Platform extends Component {
  constructor(props, context) {
    super(props);
  };

  render() {
    const platforms = GetPlatforms.all();
    if (!platforms) {
      return <h3 className="error"><i>Sorry, but there are no platforms(s) found!</i></h3>
    }
    const platform = platforms.map((item, i) =>  {
      return (
          <Link key={i}  to='/mode' className={"card "+item.type} data-name={item.name}  onClick={() => this.props.setPlatform(item.name)}>
            <img id={"platform-"+item.id} title={item.name} data-name={item.name} src={item.src}/>
          </Link>
      );
    });
    return (
      <section className="main__content" id="sectionPlatform">
        <div className="content__wrapper">
          {platform}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform)