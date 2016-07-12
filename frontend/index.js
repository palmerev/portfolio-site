import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import CoreLayout from './src/components/CoreLayout/CoreLayout.js'
import Main from './src/components/Main/Main.js'
import PortfolioItemDetail from './src/components/PortfolioItemDetail/PortfolioItemDetail.js'

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={Main} />
    </Route>
    <Route path="/detail/:itemSlug" component={PortfolioItemDetail}/>
  </Router>),
  document.getElementById('app'))
