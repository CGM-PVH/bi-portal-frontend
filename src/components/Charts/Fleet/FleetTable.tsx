// src/components/Charts/Fleet/FleetTable.tsx
import { fleetTableData } from "../../../data/dataCharts/fleet/FleetTableData";
import GenericTable from "../../Table/GenericTable";

const FleetTable = ({ isMobile, className }: { isMobile: boolean; className?: string; }) => {
    const anos = [...new Set(fleetTableData.map((d) => d.ano))];

    return (
        <GenericTable
            data={fleetTableData}
            columns={[
                { field: "placa" },
                { field: "modelo" },
                { field: "ano" },
                { field: "os", label: "Nº de OS" },
                { field: "custo", label: "Custo Total (R$)" },
            ]}
            filtersConfig={[
                { field: "modelo", label: "Modelo", type: "text" },
                { field: "ano", label: "Ano", type: "select", options: anos },
                { field: "custo", label: "Custo", type: "number" },
            ]}
            isMobile={isMobile}
            className={className}
        />
    );
};

export default FleetTable;