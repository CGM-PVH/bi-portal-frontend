export interface FleetData {
    placa: string;
    modelo: string;
    ano: number;
    os: number;
    custo: number;
  }
  
  export interface FleetChartData {
    label: string;
    [key: string]: number | string;
  }