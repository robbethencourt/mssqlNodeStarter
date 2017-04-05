/* global describe, test, expect */
import React from 'react'
import { mount } from 'enzyme'
import HomeContainer from './HomeContainer'
import Home from './Home'

describe('<HomeContainer />', () => {
  test('should exist', () => {
    const component = mount(<HomeContainer />)
    expect(component.exists())
  })
  test('should contain <Home /> component', () => {
    const component = mount(<HomeContainer />)
    expect(component.find(Home).length).toEqual(1)
  })
})
