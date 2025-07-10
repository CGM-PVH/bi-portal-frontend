// Funções dos Gráficos
import { useDadosPainel } from '../../../../../api/graphql/hooks/useDadosPainel';
import { BarChartRecharts } from '../../../../../components/Charts/BarChart';
import HeatMap from "../../../../../components/Charts/HeatMapChar";
import { ScatterChartRecharts } from '../../../../../components/Charts/ScatterChart';
import StackedBar from "../../../../../components/Charts/StackedChar";

export default function CustosDetalhados() {

  const dataPainel= useDadosPainel()
  const dataBarChart = dataPainel.porSecretaria.map((item) => ({
    label: item.nome,
    value: item.total
  }))

  const kmHorimetroCustoData = dataPainel.dispersaoKmCusto

  const formattedData = kmHorimetroCustoData.map(item => ({
    x: item.kmHorimetro,
    y: item.custo,
  }));

  const ScatterDataChart = [
    {
      name: 'Dispersão de Custos por Km/Horímetro',
      data: formattedData,
    }
  ];
  
  return (
    <div className="h-full mt-4 mb-4 space-y-10">
      {/* Barras verticais */}
      <div className='h-[900px] pb-8 rounded-md'>
        <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
          Gasto Por Unidade
        </h2>
        <BarChartRecharts 
          data={dataBarChart}
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
        <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
          Custos MDO vs. Peças por unidade
        </h2>
        {/* ##Rever detalhes dos dados a serem passados aqui##*/}
        {/* <StackedBar 
          data={}
          keys={[
            { key: "Mão de Obra", stackId: "custos" },
            { key: "Peças", stackId: "custos" },
          ]}
          showLegend={false}
          sizeLegend={14}
          height={450}
          width={250}
          colors={[ '#dd1b16', '#FFBB28' ]}
          className='bg-white h-full w-full px-4 rounded-b-md'
        /> */}
      </div>

      {/* Gráfico de Dispersão */}
      <div className='w-full h-[500px] pb-8'>
        <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
          Dispersão KM/Horímetro x Custo
        </h2>
        <ScatterChartRecharts
          data={ScatterDataChart}
          showLegend={false}
          xAxisLabel="KM/Horímetro"
          yAxisLabel="Custo"
          xUnit="km"
          yUnit="R$"
          xTickCount={10}
          yTickCount={10}
          zRange={[ 20, 60 ]}
          colors={[ '#8884d8', '#82ca9d' ]}
          className='bg-white h-full w-full px-4 py-4 rounded-b-md'
        />
      </div>

      {/* Mapa de Calor */}
      <div>
        <HeatMap />
      </div>
    </div>
  );
}
