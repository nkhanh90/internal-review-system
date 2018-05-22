import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import store from './store'

import StaffsContainer from './containers/staffs/staffsContainer'

import './index.css'

ReactDOM.render(
  <Provider store={ store }>
    <Router >
      <div className='container'>
        <Route path="/" exact component={ StaffsContainer }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
