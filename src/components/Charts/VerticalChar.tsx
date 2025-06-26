// ./src/components/Charts/VerticalChar.tsx
import React, { useEffect, useState } from "react";
import { dadosBarrasVerticais } from "../../data/dataCharts/CharVerticalBar";

const VerticalBar = React.memo(() => {
  const [Recharts, setRecharts] = useState<typeof import("recharts")>();

  useEffect(() => {
    import("recharts").then(setRecharts);
  }, []);

  if (!Recharts) return <div>Carregando gráfico de barras verticais...</div>;

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

  return (
    <>
      <h2 className="text-xl mt-12 font-semibold bg-lime-500 rounded-t-md mb-0 p-2">
        Gasto Por Unidade
      </h2>
      <div className="p-8 bg-white space-y-10 rounded-b-2xl">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dadosBarrasVerticais}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unidade" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
});

export default VerticalBar;
