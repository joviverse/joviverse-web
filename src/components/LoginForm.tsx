import { useQuery } from '@apollo/client'
import React, { ChangeEvent, FormEvent, useCallback } from 'react'
import useInput from '../hooks/useInput'
import { LOG_IN } from '../util/gql'

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(email, password)
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
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
