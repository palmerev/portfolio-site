import React, { PropTypes } from 'react'

const PortfolioItem = (props) => (
  <div className="portfolio-item-root">
    <h2 className="portfolio-item-title">{props.title}</h2>
    <div className="portfolio-item-description">{props.children || ""}</div>
  </div>
)

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default PortfolioItem
