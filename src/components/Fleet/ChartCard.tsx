
const ChartCard = ({ title, children }: { title: string; children: React.ReactNode; }) => (
    <div>
        <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
            {title}
        </h2>
        {children}
    </div>
);

export default ChartCard;


