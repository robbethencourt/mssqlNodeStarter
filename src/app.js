import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { HomeContainer } from './Components'
import './index.scss'
import './favicon.ico'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={HomeContainer} />
          {/* probably want to get rid of exactly for other routes, but should look into this on my own before doing so */}
        </div>
      </BrowserRouter>
    )
  }
})

render(
  <App />,
  document.getElementById('app')
)
