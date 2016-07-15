import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Main from './Main.js'
import portfolioInfo from '../../fixtures/portfolio-info'

const numItems = portfolioInfo.length

describe('Main component', function () {
  it('renders without exploding', function noExplode() {
    expect(shallow(<Main />)).toExist
  })
  it('renders the correct number of PortfolioItemSummarys', function hasItems() {
    expect(
      shallow(<Main />).find('PortfolioItemSummary').length)
      .toBeGreaterThan(0)
      .toEqual(numItems)
  })
})
