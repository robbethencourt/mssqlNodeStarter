import React from 'react'
import { Home } from '../Components'
import axios from 'axios'

const HomeContainer = React.createClass({
  componentWillMount () {
    console.log('home container componentWillMount')
    axios.get('/api/test')
      .then(response => {
        console.log(response.data)
      })
  },
  render () {
    return (
      <Home />
    )
  }
})

export default HomeContainer
