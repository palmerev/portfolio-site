import React, { PropTypes } from 'react'
import PortfolioItemSummary from '../PortfolioItemSummary/PortfolioItemSummary.js'
import portfolioInfo from '../../fixtures/portfolio-info'

const Main = (props) => {
  return (
    <div>
      {portfolioInfo.map((item, i, self) => (
        <PortfolioItemSummary
          key={i}
          slug={item.slug}
          title={item.title}
          shortDescription={item.shortDescription}
        />
    ))}
    </div>
  )
}

export default Main
