// src/interfaces/overview/overviewTypes.ts

export interface OverViewProps {
  isMobile: boolean;
}

export interface KpiCardsProps {
  className: string;
  isMobile: boolean;
}

export interface ChartContainerProps {
  className: string;
}

export interface PizzaDistributionProps {
  className: string;
  isMobile: boolean;
}

export interface KpiCardData {
  title: string;
  value: string;
  change: string;
  color: string;
}

export interface LineChartData {
  label: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface PieChartData {
  label: string;
  value: number;
}
