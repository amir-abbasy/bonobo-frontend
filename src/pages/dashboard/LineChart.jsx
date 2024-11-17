import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { lineChartOption, lineChartNoAxisOption } from '../../assets/data/chartData'
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({
    labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data = [65, 59, 80, 81, 56, 55, 40],
    options = lineChartOption,
    onlyLine = false

}) {
    const chartData = {
        labels, // X-axis labels
        datasets: [
            {
                label: 'Dataset 1', // Legend label
                data: data, // Y-axis values
                borderColor: '#4579ff', // Line color
                // backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the line
                tension: 0.4, // Curvature of the line (0 = straight, 1 = very curved)
                // pointRadius: 0, // Removes the line marks (points)
                // pointHoverRadius: 0, // Disables hover effect on points
                // borderWidth: 1
            },
        ],
    };

    if (onlyLine) {
        chartData.datasets[0]['pointRadius'] = 0
        chartData.datasets[0]['pointHoverRadius'] = 0
        chartData.datasets[0]['borderColor'] = '#ccc'
        // chartData.datasets[0]['borderWidth'] = 1
    }


    return <Line data={chartData} options={options} />;
}

export default LineChart;
