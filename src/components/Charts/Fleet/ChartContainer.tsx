import React from "react";

const ChartContainer = ({ children, isMobile, className }: { children: React.ReactNode; isMobile: boolean; className: string; }) => (
    <div className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"} h-full overflow-y-auto flex items-center justify-center`}>
        {children}
    </div>
);

export default ChartContainer;