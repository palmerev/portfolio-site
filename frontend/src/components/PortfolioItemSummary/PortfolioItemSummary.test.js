import React from 'react'
import expect from 'expect'
import { shallow, render } from 'enzyme'
import PortfolioItem from './PortfolioItem'

const minProps = {
  title: "Item Title",
  slug: "test",
  shortDescription: "This is a short description"
}
describe('PortfolioItem', function() {
  it('has a title', function hasTitle() {
    expect(
      shallow(<PortfolioItem {...minProps} />)
      .find('.portfolio-item-title').length
    ).toEqual(1)
  })
  it('has a title that link to its detail page', function hasDetailLink() {
    expect(
      shallow(<PortfolioItem {...minProps} />)
      .find('Link').length
    ).toEqual(1)

    expect(
      shallow(<PortfolioItem {...minProps} />)
      .find('Link').prop('to')
    ).toEqual('/detail/test')
  })
  it('has a short description', function hasShortDescription() {
    expect(
      shallow(<PortfolioItem {...minProps} />)
      .find('.portfolio-item-short-description').length
    ).toEqual(1)
  })
})
