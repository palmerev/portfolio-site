import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import PortfolioItem from './PortfolioItem'

const minProps = {
  title: "Item Title"
}
describe('PortfolioItem', function() {
  it('renders children', function rendersChildren() {
    expect(shallow(<PortfolioItem />))
  })
  it('has a title')
  it('has a title that link to its detail page')
  it('has a description')
})
