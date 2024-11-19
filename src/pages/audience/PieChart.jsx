import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartExample = () => {
    const data = {
        labels: ["Valid", "Spamtrap", "Unknown", "Bounced",],
        datasets: [
            {
                label: "Votes",
                data: [12, 19, 3, 5],
                backgroundColor: [
                    "#03045e",
                    "#023e8a",
                    "#0096c7",
                    "#48cae4",
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ width: "50%", margin: "0 auto" }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChartExample;
