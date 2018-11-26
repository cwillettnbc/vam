/**
 * App rendered in #app
 */
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './components/App';
import './main.css';

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers);

render((
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
), document.getElementById('main'));
