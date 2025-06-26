//Tipagem dos dados
export interface InvoiceBarData {
  mes: string;
  bruto: number;
  comDesconto: number;
}

export interface InvoicePieData {
  tipo: string;
  valor: number;
}

export interface InvoiceTableData {
  id: number;
  cliente: string;
  data: string;
  motivo: string;
}
