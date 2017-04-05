/* global describe, test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('<Home />', () => {
  test('should display only one user', () => {
    const component = shallow(<Home users={[{someName: 'Bill', someNumber: '12345'}]} />)
    const list = component.find('ul').length
    expect(list).toEqual(1)
  })
  test('should display username: Bill, userId: 12345', () => {
    const component = shallow(<Home users={[{someName: 'Bill', someNumber: '12345'}]} />)
    const text = component.find('ul li')
    expect(text.text()).toEqual('username: Bill, userId: 12345')
  })
})
