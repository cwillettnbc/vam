/**
 * App Component: {Nav, Header, Main, Notifications}
 */
import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Notifications from './Notifications'

const App = (props, state) => (
  <div className="main__flex">
    <Nav/>
    <Header render={(props, state)}/>
    <Main />
    <Notifications/>
  </div>
);

export default App
