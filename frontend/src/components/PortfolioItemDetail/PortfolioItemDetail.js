import React, { PropTypes } from 'react'
import portfolioInfo from '../../fixtures/portfolio-info'

const PortfolioItemDetail = (props) => {
  const item = portfolioInfo.filter(o => o.slug === props.params.itemSlug)
  if (item.length === 1) {
    return (
      <div className="portfolio-item-detail-root">
      <h2>{item[0].title}</h2>
      <p className="portfolio-item-detail-description">{item[0].longDescription}</p>
      </div>
    )
  }
  else {
    return (
      <div className="portfolio-item-detail-root">
      <p>No item available.</p>
      </div>
    )
  }
}

export default PortfolioItemDetail
