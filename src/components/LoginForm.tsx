import { useLazyQuery, useQuery } from '@apollo/client'
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import useInput from '../hooks/useInput'
import { LOG_IN } from '../util/gql'
import { setLocalJwt } from '../util/util'

type Props = {
  tokenHandler: any
}

const LoginForm = (props: Props) => {
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [skipQuery, setSkipQuery] = useState<boolean>(true)
  const { loading, data, refetch } = useQuery<any>(LOG_IN, {
    variables: { email: email, password: password },
    onCompleted: (data: any) => {
      console.log('onCompleted', data)
      if (!data.UserLogin.isAuthenticated) {
        alert(data.UserLogin.errors[0] && data.UserLogin.errors[0].code)
      }
      props.tokenHandler(data.UserLogin.token)
      setLocalJwt(data.UserLogin.token)
      setSkipQuery(true)
    },
    skip: skipQuery,
  })

  const handleClick = () => {
    setSkipQuery(false)
  }

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      console.log(email, password)
      e.preventDefault()
    },
    [email, password]
  )

  return (
    <form onSubmit={onSubmitForm}>
      <input
        name="user-email"
        value={email as string}
        onChange={
          onChangeEmail as (event: ChangeEvent<HTMLInputElement>) => void
        }
        required
      ></input>
      <input
        name="user-password"
        type="password"
        value={password as string}
        onChange={
          onChangePassword as (event: ChangeEvent<HTMLInputElement>) => void
        }
        required
      ></input>
      <button type="submit" onClick={handleClick}>
        {loading ? 'loading...' : 'login'}
      </button>
    </form>
  )
}

export default LoginForm
