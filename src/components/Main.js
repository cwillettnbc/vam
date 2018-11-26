/**
 * Main Component
 */
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Brand from './Brand'
import Platform from './Platform'
import Mode from './Mode'
import Edit from './Edit'

// The Main component renders all the Routes Listed
// Exact Routes (provided that one matches).
// {NotFound} Route is a catch all for 404 pages

class Main extends Component {
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
              key={location.key}
              classNames="slide"
              timeout={300}>
            <div className="main__content--wrapper">
            <Switch location={location}>
              <Route exact path='/' render={(props, state) => <Brand {...{props, state}} />}/>
              <Route path='/platform' render={(props, state) => <Platform {...{props, state}}  />}/>
              <Route path='/mode' render={(props, state) => <Mode {...{props, state}} />}/>
              <Route path='/edit' render={(props, state) => <Edit {...{props, state}}  />}/>
            </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}/>
  );
  }
}

export default Main
