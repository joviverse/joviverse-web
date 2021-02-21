import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httplink = createHttpLink({
  uri: 'https://r4yy0o6k4e.execute-api.us-east-1.amazonaws.com/dev/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const cache = new InMemoryCache()
export const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache,
})
