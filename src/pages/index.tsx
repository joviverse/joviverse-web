import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOG_IN } from '../util/gql'
import { saveJwtToLocalStorage } from '../util/util'

const email = 'sunghyun.cho@usc.edu'
const password = 'password'

const Home = () => {
  const { loading, data, refetch } = useQuery<any>(LOG_IN, {
    variables: { email, password },
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    refetch()
  }, [])
  useEffect(() => {
    if (!data) return
    setIsLoading(false)
    console.log(data)
    if (data.UserLogin.token) {
      saveJwtToLocalStorage(data.UserLogin.token)
    }
  }, [data])
  if (isLoading) return <p>loading...</p>
  else {
    return JSON.stringify(data)
  }
}

export default Home
