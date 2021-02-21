import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOG_IN } from '../util/gql'
import { getLocalJwt } from '../util/util'
import LoginForm from '../components/LoginForm'
import LogOutButton from '../components/LogOutButton'

const Home = () => {
  const [token, setToken] = useState(getLocalJwt())
  console.log(token, typeof token)
  return token && token !== 'null' ? (
    <div>
      {token}
      <LogOutButton tokenHandler={setToken} />
    </div>
  ) : (
    <LoginForm tokenHandler={setToken} />
  )
}

export default Home
