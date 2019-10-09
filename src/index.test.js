import React from 'react'
import { mount } from 'enzyme'

import Keyboard from './index.js'

describe('<Keyboard />', () => {
  it('renders', () => {
    mount(<Keyboard />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Keyboard background="blue" color="red" />)
    expect(component.find('div.keyboard').props().style.background).toEqual('blue')
    expect(component.find('div.keyboard').props().style.color).toEqual('red')
  })
})
