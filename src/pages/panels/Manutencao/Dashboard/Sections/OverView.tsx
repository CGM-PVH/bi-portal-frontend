import { useState } from 'react';
import { useDadosPainel } from '../../../../../api/graphql/hooks/useDadosPainel';
import { LineChartRecharts } from "../../../../../components/Charts/LineChart";
import { PieChartRecharts } from "../../../../../components/Charts/PieChart";

export const OverView = ({ isMobile }: { isMobile: boolean }) => {
  const screenMode = ["bg-slate-800", "bg-white"];
  const x = 1;
  return (
    <>
      <h1 
      className='text-2xl font-bold bg-official-yellow rounded-md p-2 mb-4 text-left'
      >VISÃO GERAL</h1>
      <OverViewKpiCards className={screenMode[x]==='bg-white'? 'bg-white text-black': 'bg-slate-800 text-white'} isMobile={isMobile}/>
      <div className={`mb-4 grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-5'}`}>
        <div className={isMobile ? '' : 'col-span-2'}>
          <OverViewPizzaDistribution className={screenMode[x]+" min-w-fit"} isMobile={isMobile} />
        </div>
        <div className={isMobile ? '' : 'col-span-3'}>
          <OverViewTimeLine className={screenMode[x]} />
        </div>
      </div>
    </>
  );
};

const OverViewKpiCards = ({
  className,
  isMobile,
}: {
  className: string;
  isMobile: boolean;
}) => {
  const { data } = useDadosPainel()

  const kpiCardsData = [
    {
      title: "Total de OS",
      value: data?.totalOS .toLocaleString("pt-BR"),
      change: "+12.3%",
      color: "emerald-500",
    },
    {
      title: "Valor Total",
      value: data?.valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      change: "+8.1%",
      color: "emerald-500",
    },
    {
      title: "Custo Médio por OS",
      value: data?.custoMedio.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      change: "+10.5%",
      color: "emerald-500",
    },
    {
      title: "Total de Veículos distintos",
      value: data?.totalVeiculosDistintos.toLocaleString("pt-BR"),
      change: "+5.0%",
      color: "emerald-500",
    },
  ];

  return (
    <>
    <div className={`mb-4 grid ${isMobile? `grid-cols-2 gap-2` : `grid-cols-4 gap-4`}`}>
      {/* Generate KPI Cards */}
        {kpiCardsData.map((card, index) => (
        <div key={index} className={`rounded-lg ${className} ${isMobile?'p-4':'py-8 px-4'} shadow-md flex flex-col`}>
          <p className="text-md font-medium">{card.title}</p>
            <p className="text-3xl font-semibold tracking-tight break-all">{card.value}</p>
          <span className={`text-md font-medium w-fit rounded-md p-1 bg-emerald-500 text-emerald-950`}>{card.change}</span>
        </div>
      ))}
    </div>
    </>
  );
};

const OverViewTimeLine = ({className}:{className:string}) => {
  // const sampleDataLineChart = [
  //   {
  //     label: "2022",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     label: "2023",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     label: "2024",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     label: "2025",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  // ];
  const [ dataInicio, setDataInicio ] = useState('2022-01-01');
  const [ dataFim, setDataFim ] = useState('2025-12-31');
  const { linhaDoTempo, loading } = useDadosPainel({
    dataInicio,
    dataFim
  });
  return (
    <>
      <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>Linha do Tempo</h2>
      <div className={`${className} p-4 rounded-b-lg shadow-md max-h-96 h-full overflow-y-auto flex items-center justify-center`}>
        <LineChartRecharts
          data={linhaDoTempo.map(item => ({
            label: item.periodo,
            value: item.total
          }))}
          title=""
          showLegend={true}
          sizeLegend={16}
          sizeTitle={20}
          height={300}
          width={1250}
          colors={["#8884d8", "#82ca9d", "#FFBB28"]}
          className="text-white w-full h-full"
        />
      </div>
    </>
  );
};
const OverViewPizzaDistribution = ({
  className,
  isMobile,
}: {
  className: string;
  isMobile: boolean;
}) => {
  // const sampleDataPieChart = [
  //   { label: "React", value: 40 },
  //   { label: "Vue", value: 30 },
  //   { label: "Angular", value: 20 },
  //   { label: "Svelte", value: 10 },
  // ];

  const {porTipoOS} = useDadosPainel()

  return (
    <>
    <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>Proporção por Tipo de OS</h2>
      <div className={`${className} p-4 rounded-b-lg shadow-md ${isMobile? 'max-h-72':'max-h-96'} h-full overflow-y-auto flex items-center justify-center`}>
        <PieChartRecharts
          data={porTipoOS.map(item => ({
            label: item.nome,
            value: item.total
          }))}
          donut={true}
          title=""
          showLegend={false}
          sizeLegend={12}
          sizeTitle={24}
          chartHeight={isMobile? 300:350}
          chartWidth={isMobile? 125:350}
          colors={[ '#0088FE', '#00C49F', '#FFBB28', '#ff3e00' ]}
          className='text-white w-full h-full'
        />
      </div>
    </>
  );
};
