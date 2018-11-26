/**
 * Brand Component
 */

import React, { Component } from 'react'
import GetBrands from '../config/GetBrandAPI'
import { Link } from 'react-router-dom'
import { setBrand, getState } from '../actions'
import { connect } from 'react-redux'

// Fetch initial state
const mapStateToProps = state => ({
  state: getState({})
});

// Dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    setBrand: name => {
      dispatch(setBrand(name))
    }
  }
};

class Brand extends Component {
  constructor(props, context) {
    super(props);
  };
  render() {
    const brands = GetBrands.all();
    const logos = brands.map((item, i) =>  {
    const clean_name = item.name.toLowerCase().replace(/\s+/g, '');
    return (
        <Link key={i}  to='/platform' className={"card "+clean_name} data-name={item.name} onClick={() => this.props.setBrand(item.name)}>
          <img id={"brand-"+item.id} title={item.name} src={item.src}/>
        </Link>
    );
    });
    return (
      <section className="main__content" id="sectionBrand">
        <div className="content__wrapper">
          {logos}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)