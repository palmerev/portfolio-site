import React, { PropTypes } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.js'
import portfolioInfo from '../../fixtures/portfolio-info'

const Main = (props) => {
  return (
    <div>
      {portfolioInfo.map((item, i, self) => (
        <PortfolioItem
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
