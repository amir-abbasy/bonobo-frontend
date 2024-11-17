import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StackedChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [
            {
                label: 'Dataset 1',
                data: [30, 50, 40, 60, 70, 50], // Data for the first stack
                backgroundColor: '#4579ff', // Color for the first stack
                barThickness: 10, // Set exact bar width in pixels
                maxBarThickness: 30, // Optional: Max width for responsive resizing
            },
            {
                label: 'Dataset 2',
                data: [20, 30, 50, 40, 60, 30], // Data for the second stack
                backgroundColor: '#F69F1C', // Color for the second stack
                barThickness: 10, // Set exact bar width in pixels
                maxBarThickness: 30, // Optional: Max width for responsive resizing
            },
            // {
            //     label: 'Dataset 3',
            //     data: [10, 40, 30, 50, 20, 60], // Data for the third stack
            //     backgroundColor: 'rgba(54, 162, 235, 0.8)', // Color for the third stack
            // },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
                display: false, // Chart title

            },
            title: {
                display: false, // Chart title
                text: 'Stacked Bar Chart',
            },
        },
        scales: {
            x: {
                stacked: true, // Enable stacking on the X-axis
                ticks: {
                    color: '#ccc', // Set Y-axis label color
                },
                grid: {
                    display: false, // Optional: Disable Y-axis grid lines
                    color: 'transparent', // Set Y-axis label color
                },
                border: {
                    display: false, // Explicitly disable the axis border
                },

            },
            y: {
                stacked: true, // Enable stacking on the Y-axis
                beginAtZero: true, // Start Y-axis at 0
                ticks: {
                    color: '#ccc', // Set Y-axis label color
                },
                grid: {
                    display: false, // Optional: Disable Y-axis grid lines
                    color: 'transparent', // Set Y-axis label color
                },
                border: {
                    display: false, // Explicitly disable the axis border
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default StackedChart;
