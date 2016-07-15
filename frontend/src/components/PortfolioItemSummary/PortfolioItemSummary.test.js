import React from 'react'
import expect from 'expect'
import { shallow, render } from 'enzyme'
import PortfolioItemSummary from './PortfolioItemSummary'

const minProps = {
  title: "Item Title",
  slug: "test",
  shortDescription: "This is a short description"
}
describe('PortfolioItemSummary', function() {
  it('has a title', function hasTitle() {
    expect(
      shallow(<PortfolioItemSummary {...minProps} />)
      .find('.portfolio-item-title').length
    ).toEqual(1)
  })
  it('has a title that link to its detail page', function hasDetailLink() {
    expect(
      shallow(<PortfolioItemSummary {...minProps} />)
      .find('Link').length
    ).toEqual(1)

    expect(
      shallow(<PortfolioItemSummary {...minProps} />)
      .find('Link').prop('to')
    ).toEqual('/detail/test')
  })
  it('has a short description', function hasShortDescription() {
    expect(
      shallow(<PortfolioItemSummary {...minProps} />)
      .find('.portfolio-item-short-description').length
    ).toEqual(1)
  })
})
