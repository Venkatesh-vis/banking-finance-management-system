"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: ["Bank 1", "Bank 2", "Bank 3"],
        datasets: [
            {
                data: [1250, 2500, 3750],
                backgroundColor: ["#0747B6", "#2265D8", "#2F91FA"],
                borderWidth: 0,
                hoverOffset: 3,
            },
        ],
    };

    return (
        <div className="h-full w-full">
            <Doughnut
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "72%",
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
};

export default DoughnutChart;