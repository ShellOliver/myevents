import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Card from '../card/card'

describe('<MyComponent />', () => {
  it('simple', () => {
    const wrapper = shallow(<Card />)
    let title = wrapper.state()
    console.log(title)
    // expect(title).to.be.true()
  })
})
