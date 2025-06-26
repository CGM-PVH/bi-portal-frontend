import InvoicesBarChart from "../../../../../components/Invoices/InvoicesBarChart";
import InvoicesPieChart from "../../../../../components/Invoices/InvoicesPieChart";
import InvoicesTable from "../../../../../components/Invoices/InvoicesTable";

export default function InvoicesSection() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        Total Bruto x Total com Desconto
      </h2>
      <div className="bg-white p-4 rounded-b-md shadow-md mb-4">
        <InvoicesBarChart />
      </div>

      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        % de OS com e sem desconto
      </h2>
      <div className="bg-white p-4 rounded-b-md shadow-md mb-4">
        <InvoicesPieChart />
      </div>

      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        OS sem Nota Fiscal (Peças ou MDO)
      </h2>
      <InvoicesTable />
    </section>
  );
}
