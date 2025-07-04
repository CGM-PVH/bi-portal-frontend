// Funções dos Gráficos
import { useDadosPainel } from '../../../../../api/graphql/hooks/useDadosPainel';
import { BarChartRecharts } from '../../../../../components/Charts/BarChart';
import Dispersal from "../../../../../components/Charts/DispersalChart";
import HeatMap from "../../../../../components/Charts/HeatMapChar";
import StackedBar from "../../../../../components/Charts/StackedChar";

export default function CustosDetalhados() {

  const { porSecretaria } = useDadosPainel()
  const dataChart = porSecretaria.map((item) => ({
    label: item.nome,
    value: item.total
  }))
  
  return (
    <div className="h-full mt-4 mb-4 space-y-10">
      {/* Barras verticais */}
      <div className='h-[900px] pb-8 rounded-md '>
        <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
          Gasto Por Unidade
        </h2>
        <BarChartRecharts 
          data={dataChart}
          showLegend={false}
          sizeLegend={12}
          height={450}
          width={250}
          colors={[ '#61dafb', '#dd1b16', '#FFBB28' ]}
          className='bg-white h-full w-full px-4 rounded-b-md'
        />
      </div>

      {/* Barras empilhadas */}
      <div>
        <StackedBar />
      </div>

      {/* Gráfico de Dispersão */}
      <div>
        <Dispersal />
      </div>

      {/* Mapa de Calor */}
      <div>
        <HeatMap />
      </div>
    </div>
  );
}
