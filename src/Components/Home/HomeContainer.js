// @flow
import React from 'react'
import { default as Home } from './Home'
import axios from 'axios'

const HomeContainer = React.createClass({
  getInitialState () {
    return {
      isFetching: true,
      users: []
    }
  },
  addSome (x: number, y:number) {
    return x * y
  },
  componentWillMount () {
    this.addSome(2, 3)
    axios.get('/api/test')
      .then(response => {
        this.setState({
          isFetching: false,
          users: response.data
        })
      })
  },
  render () {
    return (
      <Home
        isFetching={this.state.isFetching}
        users={this.state.users} />
    )
  }
})

export default HomeContainer
