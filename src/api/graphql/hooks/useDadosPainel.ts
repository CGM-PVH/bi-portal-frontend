// src/graphql/hooks/useDadosPainel.ts
import { useQuery } from '@apollo/client'
import { getDadosPainel } from '../queries'

export type FiltrosPainelInput = {
  secretaria?: string[]
  tipoOs?: string[]
  dataInicio?: string
  dataFim?: string
}
interface ItemResumo {
  nome: string;
  total: number;
}

interface ItemSerieTempo {
  periodo: string;
  total: number;
}

interface DispersaoPonto {
  kmHorimetro: number;
  custo: number;
}

interface FrequenciaHora {
  diaSemana: string;
  hora: number;
  quantidade: number;
}

interface OrdemSemNota {
  id: number;
  cliente: string;
  data: string;
  motivo: string;
}

interface DadosPainel {
  obterDadosPainelManutencao: {
  title: string
  totalOS: number;
  totalVeiculosDistintos: number;
  valorTotal: number;
  custoMedio: number;
  totalPecas: number;
  totalMaoDeObra: number;
  totalGeral: number;
  porTipoOS: ItemResumo[];
  porSecretaria: ItemResumo[];
  porOficina: ItemResumo[];
  porModelo: ItemResumo[];
  linhaDoTempo: ItemSerieTempo[];
  dispersaoKmCusto: DispersaoPonto[];
  frequenciaDiaHora: FrequenciaHora[];
  totalBruto: number;
  totalComDesconto: number;
  percentualComDesconto: number;
  osSemNotaFiscal: OrdemSemNota[];
    // outras propriedades como porStatus, porSetor, etc
  };
}

export const useDadosPainel = (filtros?: FiltrosPainelInput) => {
  const { data, loading, error } = useQuery<DadosPainel>(getDadosPainel, {
    variables: filtros ? { filtros } : {},
  })

  const porTipoOS = data?.obterDadosPainelManutencao.porTipoOS ?? [];
  const porSecretaria = data?.obterDadosPainelManutencao.porSecretaria ?? [];
  const porOficina = data?.obterDadosPainelManutencao.porOficina ?? [];
  const porModelo = data?.obterDadosPainelManutencao.porModelo ?? [];
  const linhaDoTempo = data?.obterDadosPainelManutencao.linhaDoTempo ?? [];
  const dispersaoKmCusto = data?.obterDadosPainelManutencao.dispersaoKmCusto ?? [];
  const frequenciaDiaHora = data?.obterDadosPainelManutencao.frequenciaDiaHora ?? [];
  const osSemNotaFiscal = data?.obterDadosPainelManutencao.osSemNotaFiscal ?? [];


  return {
    data: data?.obterDadosPainelManutencao,
    porTipoOS,
    porOficina,
    porModelo,
    porSecretaria,
    linhaDoTempo,
    dispersaoKmCusto,
    frequenciaDiaHora,
    osSemNotaFiscal,
    loading,
    error,
  }
}
