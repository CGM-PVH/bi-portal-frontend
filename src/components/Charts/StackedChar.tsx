import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataItem = {
  label: string;
  [ key: string ]: string | number;
};

type BarKey = {
  key: string;
  stackId: string;
};

type StackedBarChartProps = {
  data: DataItem[];
  keys?: BarKey[];
  colors: readonly string[];
  sizeLegend?: number;
  sizeTitle?: number;
  showLegend?: boolean;
  height: number;
  width: number;
  className: string;
};

export default function StackedBar({
  data,
  height,
  keys,
  width,
  sizeLegend,
  colors,
  showLegend,
  className,
}: StackedBarChartProps) {
  return (
    <div className={`p-6 bg-white rounded-b-md ${className}`} style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" stackOffset="sign">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="label" type="category" />
          <Tooltip />
          {showLegend && <Legend wrapperStyle={{ fontSize: sizeLegend }} />}

          {keys?.map((item, index) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              stackId={item.stackId}
              fill={colors[ index % colors.length ]}
            />
          ))}

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
