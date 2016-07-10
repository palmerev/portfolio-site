import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CoreLayout from './CoreLayout'

describe('CoreLayout', function() {
  it('renders children', function() {
    const wrapper = shallow(
      <CoreLayout>
        <div className="child" />
      </CoreLayout>
    )
    expect(wrapper.contains(<div className="child" />)
  ).toEqual(true)
  })
})
