import { gql } from '@apollo/client'

export const LOG_IN = gql`
  query UserLogin($email: String!, $password: String!) {
    UserLogin(input: { email: $email, password: $password }) {
      isAuthenticated
      token
      errors {
        code
        message
      }
    }
  }
`
