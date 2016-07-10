import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import CoreLayout from './src/components/CoreLayout/CoreLayout.js'
import Main from './src/components/Main/Main.js'

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={Main} />
    </Route>
  </Router>),
  document.getElementById('app'))
