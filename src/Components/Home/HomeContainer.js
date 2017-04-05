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
    users: Array<User>,
    errorFetching: ''
  }
  constructor () {
    super()
    this.state = {
      isFetching: true,
      users: []
    }
  }
  componentDidMount () {
    axios.get('/api/test')
      .then(response => {
        this.setState({
          isFetching: false,
          users: response.data
        })
      })
      .catch(error => {
        this.setState({
          isFetching: false,
          errorFetching: 'error, ' + error
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
