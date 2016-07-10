import React from 'react'
import { Link } from 'react-router'

const CoreLayout = (props) => (
  <div className="core-layout-root">
    <h1>This is the CoreLayout component</h1>
    {props.children}
  </div>
)

export default CoreLayout
