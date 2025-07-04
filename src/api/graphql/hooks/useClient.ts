import { useQuery } from '@apollo/client'
import { getClients } from '../queries'

type Cliente = {
  id: string
  nome: string
  unidade: string
  subunidade: string
}

export default function useClient() {
  const { data, loading, error } = useQuery<{ clientes: Cliente[] }>(getClients)

  return {
    clientes: data?.clientes ?? [],
    loading,
    error,
  }
}