// @flow
import React from 'react'
import { default as Home } from './Home'
import axios from 'axios'

export type User = {
  someName: string,
  someNumber: string
}

class HomeContainer extends React.Component {
  state: {
    isFetching: boolean,
    users: Array<User>
  }
  constructor () {
    super()
    this.state = {
      isFetching: true,
      users: []
    }
  }
  componentWillMount () {
    axios.get('/api/test')
      .then(response => {
        this.setState({
          isFetching: false,
          users: response.data
        })
      })
  }
  render () {
    return (
      <Home
        isFetching={this.state.isFetching}
        users={this.state.users} />
    )
  }
}

export default HomeContainer
