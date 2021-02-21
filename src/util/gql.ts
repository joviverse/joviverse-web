import { gql } from '@apollo/client'

export const LOG_IN = gql`
  {
    UserLogin(input: { email: "sunghyun.cho@usc.edu", password: "password" }) {
      isAuthenticated
      token
      errors {
        code
        message
      }
    }
  }
`
