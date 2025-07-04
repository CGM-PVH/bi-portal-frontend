// src/api/graphql/queries.ts
import { gql } from '@apollo/client'

export const getClients = gql`
query {
  clientes {
    id
    nome,
    unidade,
    subunidade
  }
}`

export const getFornecedores = gql`
query {
  Fornecedores {
    id
    nome,
    cidade,
    uf,
    cnpj,
  }
}`

export const getVeiculos = gql`
query {
  Veiculo {
    id
    placa,
    numeroCartao,
    prefixo,
    tipoFrota,
    marca,
    modelo,
    ano,
    patrimonio,
    kmHorimetro,
  }
}
`
export const getPessoas = gql`
  query {
    pessoas {
      id
      nome
      cpf
      tipo
    }
  }
`

export const getDadosPainel = gql`
query ObterDadosPainel($filtros: FiltrosPainelInput) {
    obterDadosPainelManutencao(filtros: $filtros) {
      title
      totalOS
      totalVeiculosDistintos
      valorTotal
      custoMedio
      totalPecas
      totalMaoDeObra
      totalGeral

      porTipoOS {
        nome
        total
      }

      porSecretaria {
        nome
        total
      }

      linhaDoTempo {
        periodo
        total
      }

      dispersaoKmCusto {
        kmHorimetro
        custo
      }

      frequenciaDiaHora {
        diaSemana
        hora
        quantidade
      }

      totalBruto
      totalComDesconto
      percentualComDesconto

      osSemNotaFiscal {
        id
        cliente
        data
        motivo
      }
    }
  }
`
