// src/lib/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // URL do seu backend Fastify
  cache: new InMemoryCache(),
})

export default client
