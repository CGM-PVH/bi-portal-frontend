//local: src/components/Charts/RadarChart.tsx
// Grafico de Radar

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts';

type DataItem = {
  label: string;
  [key: string]: string | number;
};

type RadarChartProps = {
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

export const RadarChartRecharts = ({
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
}: RadarChartProps) => {
  const dataKeys = keys ?? Object.keys(data[0] ?? {}).filter(k => k !== 'label');

  return (
    <div className={`flex flex-col items-center justify-center py-3 ${className}`} style={{ width, height }}>
      <p className="font-semibold pb-2" style={{ fontSize: sizeTitle }}>
        {title}
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid />
          <PolarAngleAxis dataKey="label" />
          <PolarRadiusAxis />
          {dataKeys.map((key, i) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={colors[i % colors.length]}
              fill={colors[i % colors.length]}
              fillOpacity={0.4}
            />
          ))}
          {showLegend && (
            <Legend wrapperStyle={{ fontSize: sizeLegend }} />
          )}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

