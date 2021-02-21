import React from 'react'

type Props = {
  tokenHandler: any
}

const LogOutButton = (props: Props) => {
  const logOut = () => {
    localStorage.removeItem('token')
    props.tokenHandler('')
  }
  return <button onClick={logOut}>LogOut</button>
}

export default LogOutButton
