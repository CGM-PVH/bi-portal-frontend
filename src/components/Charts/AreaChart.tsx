// local do arquivo: src/components/Charts/AreaChart.tsx
// grafico de area
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

type DataItem = {
  label: string;
  [key: string]: string | number;
};

type AreaChartProps = {
  title: string;
  data: DataItem[];
  keys?: string[];
  colors: readonly string[];
  sizeLegend?: number;
  sizeTitle?: number;
  showLegend?: boolean;
  height: number;
  width: number;
  className?: string;
};

export const AreaChartRecharts = ({
  title,
  data,
  keys,
  colors,
  sizeLegend,
  sizeTitle,
  showLegend,
  height,
  width,
  className
}: AreaChartProps) => {
  const dataKeys = keys ?? Object.keys(data[0] ?? {}).filter(k => k !== 'label');

  return (
    <div
      className={`flex flex-col items-center justify-center py-3 ${className}`}
      style={{ width, height: height + 10 }}
    >
      <p className="font-semibold pb-2" style={{ fontSize: sizeTitle }}>
        {title}
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {dataKeys.map((key, i) => (
              <linearGradient id={`color-${key}`} key={key} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>

          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {showLegend && (
            <Legend
              wrapperStyle={{
                fontSize: sizeLegend,
              }}
            />
          )}
          {dataKeys.map((key, i) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[i % colors.length]}
              fillOpacity={1}
              fill={`url(#color-${key})`}
              name={key}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
