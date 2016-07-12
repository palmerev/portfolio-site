import React from 'react'
import expect from 'expect'
import { shallow, render } from 'enzyme'
import portfolioInfo from '../../fixtures/portfolio-info'
import PortfolioItemDetail from './PortfolioItemDetail'

describe('PortfolioItemDetail component', function () {
  const minProps = {
    params: { itemSlug: portfolioInfo[0].slug },
    title: portfolioInfo[0].title,
    shortDescription: portfolioInfo[0].shortDescription,
    longDescription: portfolioInfo[0].longDescription
  }
  it('renders without exploding', function noExplode() {
    expect(shallow(<PortfolioItemDetail {...minProps} />))
    .toExist
  })
  it('has a title', function hasTitle() {
    expect(shallow(<PortfolioItemDetail {...minProps} />)
      .find('h2')
      .length)
    .toEqual(1)
  })
  it('has a long item description', function hasLongDescription() {
    expect(shallow(<PortfolioItemDetail {...minProps} />)
      .find('.portfolio-item-detail-description').length)
    .toEqual(1)
  })
  it('includes the correct item description text', function descriptionText() {
    const description = minProps.longDescription
    expect(render(<PortfolioItemDetail {...minProps} />)
      .find('.portfolio-item-detail-description')
      .text())
    .toEqual(description)
  })
})
