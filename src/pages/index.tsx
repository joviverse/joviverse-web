import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOG_IN } from '../util/gql'
const Home = () => {
  const { loading, data, refetch } = useQuery<any>(LOG_IN, {
    variables: {},
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    refetch()
  }, [])
  useEffect(() => {
    if (!data) return
    setIsLoading(false)
    console.log(data)
  }, [data])
  if (isLoading) return <p>loading...</p>
  else {
    return JSON.stringify(data)
  }
}

export default Home
