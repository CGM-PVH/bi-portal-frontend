// local: src/components/Charts/LineChart.tsx
// grafico de linha
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

export const LineChartRecharts = ({
  title,
  data,
  keys,
  sizeLegend,
  sizeTitle,
  colors,
  showLegend,
  className = "",
}: LineChartProps) => {
  const dataKeys =
    keys ?? Object.keys(data[0] ?? {}).filter((k) => k !== "label");
  return (
    <div
      className={`flex flex-col items-center justify-center py-3 ${className}`}
    >
      <p className="font-semibold pb-2" style={{ fontSize: sizeTitle }}>
        {title}
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {showLegend && (
            <Legend
              wrapperStyle={{
                fontSize: sizeLegend,
              }}
            />
          )}
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

export default LineChartRecharts;
