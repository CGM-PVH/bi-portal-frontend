//local: src/components/Charts/Invoices/InvoicesTable
import { invoicesTableData } from "../../../data/dataCharts/invoices/InvoicesTableData";

export default function InvoicesTable() {
    return (
        <div className="bg-white p-4 rounded-b-md shadow-md overflow-auto mb-4">
            <table className="w-full text-sm border">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">ID</th>
                        <th className="p-2">Cliente</th>
                        <th className="p-2">Data</th>
                        <th className="p-2">Motivo</th>
                    </tr>
                </thead>
                <tbody>
                    {invoicesTableData.map((os) => (
                        <tr key={os.id} className="border-t">
                            <td className="p-2">{os.id}</td>
                            <td className="p-2">{os.cliente}</td>
                            <td className="p-2">{os.data}</td>
                            <td className="p-2">{os.motivo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


