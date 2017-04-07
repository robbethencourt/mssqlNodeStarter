// @flow
import React from 'react'
import Loading from '../Loading/Loading'
import './Home.scss'
import './images/alpha-logo-2012-x2.png'
import type { User } from './HomeContainer'

export default function Home ({ isFetching, users }: { isFetching: boolean, users: Array<User> }) {
  return (
    isFetching
      ? <Loading />
      : <div className='testing'>
        <h1>Alpha Logistics Service Initial Node App</h1>
        <img src='alpha-logo-2012-x2.png' />
        <ul>
          {users.map((user, i) => {
            return <li key={i}>username: {user.someName}, userId: {user.someNumber}</li>
          })}
        </ul>
      </div>
  )
}
