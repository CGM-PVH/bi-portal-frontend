// ./src/components/Charts/CustosDetalhados/AreaChart.tsx
import { memo, useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

const AreaChartRechartsComponent = ({
  title,
  data,
  keys,
  colors,
  sizeLegend,
  sizeTitle,
  showLegend,
  height,
  width,
  className,
}: AreaChartProps) => {
  // Memoiza o cálculo das chaves para evitar recalcular em cada render
  const dataKeys = useMemo(() => {
    return keys ?? Object.keys(data[0] ?? {}).filter(k => k !== 'label');
  }, [keys, data]);

  // Memoiza o estilo da legenda para evitar objeto inline novo em cada render
  const legendWrapperStyle = useMemo(() => ({
    fontSize: sizeLegend,
  }), [sizeLegend]);

  return (
    <div
      className={`flex flex-col items-center justify-center py-3 ${className ?? ''}`}
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
          {showLegend && <Legend wrapperStyle={legendWrapperStyle} />}
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

// Memoiza o componente para evitar re-render quando as props não mudam
export const AreaChartRecharts = memo(AreaChartRechartsComponent);
