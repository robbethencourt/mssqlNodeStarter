/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import HomeContainer from './HomeContainer.js'

test('HomeContainer should exist', () => {
  const component = shallow(<HomeContainer />)
  expect(component.exists())
})
