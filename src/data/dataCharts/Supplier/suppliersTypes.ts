//caminho: src/data/dataCharts/Supplier/suppliersTypes.ts
export interface SuppliersProps {
  isMobile: boolean;
}

export interface SuppliersTableProps {
  isMobile: boolean;
  className?: string;
}

export interface SuppliersBarChartProps {
  isMobile: boolean;
  className: string;
}

export interface SuppliersTimeLineProps {
  className: string;
}

// Tipos para os dados
export interface SupplierTableData {
  placa: string;
  modelo: string;
  ano: number;
  os: number;
  custo: number;
}

export interface SupplierBarChartData {
  label: string;
  vendas: number;
  lucro: number;
  margemErro: number;
}

export interface SupplierLineChartData {
  label: string;
  uv: number;
  pv: number;
  amt: number;
}
