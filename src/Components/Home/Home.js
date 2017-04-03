// @flow
import React from 'react'
import Loading from '../Loading/Loading'
import './Home.scss'
import './images/alpha-logo-2012-x2.png'

export default function Home ({ isFetching, users }: { isFetching: boolean, users: Array<object> }) {
  return (
    isFetching
      ? <Loading />
      : <div className='testing'>
        <h1>Alpha Logistics Service</h1>
        <img src='alpha-logo-2012-x2.png' />
        <ul>
          {users.map((user, i) => {
            return <li key={i}>username: {user.someName}, userId: {user.someNumber}</li>
          })}
        </ul>
      </div>
  )
}
