// ./src/components/Charts/CustosDetalhados/LineChart.tsx
import { memo, useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type DataItem = {
  label: string;
  [key: string]: string | number;
};

type LineChartProps = {
  title: string;
  data: DataItem[];
  keys?: string[];
  colors: readonly string[];
  sizeLegend?: number;
  sizeTitle?: number;
  showLegend?: boolean;
  height?: number;
  width?: number;
  className?: string;
};

const LineChartRechartsComponent = ({
  title,
  data,
  keys,
  sizeLegend,
  sizeTitle,
  colors,
  showLegend,
  className = "",
  height = 300,
  width = 500,
}: LineChartProps) => {
  const dataKeys = useMemo(() => {
    return keys ?? Object.keys(data[0] ?? {}).filter((k) => k !== "label");
  }, [keys, data]);

  const legendWrapperStyle = useMemo(() => ({
    fontSize: sizeLegend,
  }), [sizeLegend]);

  return (
    <div
      className={`flex flex-col items-center justify-center py-4 ${className}`}
      style={{ width, height }}
    >
      <p className="font-semibold pb-0" style={{ fontSize: sizeTitle }}>
        {title}
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 14 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend wrapperStyle={legendWrapperStyle} />}
          {dataKeys.map((key, i) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[i % colors.length]}
              name={key}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
const LineChartRecharts = memo(LineChartRechartsComponent);
export default LineChartRecharts;

