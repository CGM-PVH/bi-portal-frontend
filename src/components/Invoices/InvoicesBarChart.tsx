// Gráfico de barras
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { invoicesBarData } from "../../data/invoices/InvoicesBarData";

export default function InvoicesBarChart() {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={invoicesBarData}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bruto" fill="#60a5fa" name="Total Bruto" />
                <Bar dataKey="comDesconto" fill="#4ade80" name="Com Desconto" />
            </BarChart>
        </ResponsiveContainer>
    );
}
