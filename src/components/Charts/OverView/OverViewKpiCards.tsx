import React from "react";
import { kpiCardsData } from "../../../data/dataCharts/OverView/mockDashboardData";
import type { KpiCardsProps } from "../../../interfaces/overview/overviewTypes";

export const OverViewKpiCards: React.FC<KpiCardsProps> = ({ className, isMobile }) => {
    return (
        <div className={`mb-4 grid ${isMobile ? "grid-cols-2 gap-2" : "grid-cols-4 gap-4"}`}>
            {kpiCardsData.map((card, index) => (
                <div
                    key={index}
                    className={`rounded-lg ${className} ${isMobile ? "p-4" : "p-8"} shadow-md flex flex-col items-center`}
                >
                    <p className="text-md font-medium">{card.title}</p>
                    <p className="text-3xl font-semibold">{card.value}</p>
                    <span className="text-md font-medium w-fit rounded-md p-1 bg-emerald-500 text-emerald-950">
                        {card.change}
                    </span>
                </div>
            ))}
        </div>
    );
};
