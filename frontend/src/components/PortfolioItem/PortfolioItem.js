import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const PortfolioItem = (props) => (
  <div className="portfolio-item-root">
    <Link to={`/detail/${props.slug}`}>
      <h2 className="portfolio-item-title">{props.title}</h2>
    </Link>
    <div className="portfolio-item-short-description">{props.shortDescription}</div>
  </div>
)

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
}

export default PortfolioItem
