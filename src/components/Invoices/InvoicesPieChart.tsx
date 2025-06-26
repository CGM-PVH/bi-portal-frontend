//Gráfico de pizza
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { invoicesPieData, PIE_COLORS } from "../../data/invoices/InvoicesPieData";

export default function InvoicesPieChart() {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                    data={invoicesPieData}
                    dataKey="valor"
                    nameKey="tipo"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                >
                    {invoicesPieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
