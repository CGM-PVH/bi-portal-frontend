import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './api/apollo.ts'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
