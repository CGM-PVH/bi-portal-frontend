// local do grafico: src/components/Charts/BarChart.tsx
// grafico de barras
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type DataItem = {
  label: string;
  [key: string]: string | number;
};

type BarChartProps = {
  title: string;
  data: DataItem[];
  keys?: string[];
  colors: readonly string[];
  sizeLegend?: number;
  sizeTitle?: number,
  showLegend?: boolean;
  height: number
  width: number
  className: string
};;

export const BarChartRecharts = ({
  title,
  data,
  height,
  keys,
  width,
  sizeLegend,
  sizeTitle,
  colors,
  showLegend,
  className
}: BarChartProps) => {
  const dataKeys = keys ?? Object.keys(data[0] ?? {}).filter(k => k !== 'label');

  return (
    <div
      className={`flex flex-col w-fit items-center justify-center py-3 ${className}`}
    >
      <p
        className='font-semibold pb-2'
        style={{ fontSize: sizeTitle }}
      >{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={width} height={height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {showLegend &&
            <Legend
              wrapperStyle={{
                fontSize: (sizeLegend),
              }}
            />}
          {dataKeys.map((key, i) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[i % colors.length]}
              name={key}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export const VerticalBarChartRecharts = ({
  title,
  data,
  height,
  keys,
  width,
  sizeLegend,
  sizeTitle,
  colors,
  showLegend,
  className
}: BarChartProps) => {
  const dataKeys = keys ?? Object.keys(data[0] ?? {}).filter(k => k !== 'label');

  return (
    <div
      className={`flex flex-col w-fit items-center justify-center py-3 ${className}`}
    >
      <p
        className='font-semibold pb-2'
        style={{ fontSize: sizeTitle }}
      >{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={width} height={height} data={data} layout='vertical'>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="label" />
          <Tooltip />
          {showLegend &&
            <Legend
              wrapperStyle={{
                fontSize: (sizeLegend),
              }}
            />}
          {dataKeys.map((key, i) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[i % colors.length]}
              name={key}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartRecharts