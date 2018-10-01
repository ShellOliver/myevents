import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Card from '../card/card'
import Button from '../button/button'

describe('<MyComponent />', () => {
  it('should card have image and description', () => {
    const wrapper = shallow(<Card />)
    // complete this test
  })

  it('should button component render with name here and width 10em', () => {
    const wrapper = shallow(<Button name='here' width='10em' />)
    expect(wrapper.props().children).to.equal('here');
    expect(wrapper.props().style.width).to.equal('10em');
  })
})
