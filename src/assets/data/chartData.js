
export const lineChartOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position of the legend
            display: false,

        },
        title: {
            display: false,
            text: 'Line Chart with Custom Axis Label Colors', // Title of the chart
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#aaa', // Set X-axis label color
                // display: false,
            },
            grid: {
                display: false, // Optional: Disable X-axis grid lines
                color: '#eee', // Set Y-axis label color
            },
            border: {
                display: false, // Explicitly disable the axis border
            },
        },
        y: {
            ticks: {
                color: '#ccc', // Set Y-axis label color
                // display: false,
            },
            grid: {
                display: false, // Optional: Disable Y-axis grid lines
                color: '#eee', // Set Y-axis label color
            },
            border: {
                display: false, // Explicitly disable the axis border
            },
            beginAtZero: true, // Ensure Y-axis starts at 0
        },
    },
};






export const lineChartNoAxisOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position of the legend
            display: false,

        },
        title: {
            display: false,
            text: 'Line Chart with Custom Axis Label Colors', // Title of the chart
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#aaa', // Set X-axis label color
                display: false,
                drawBorder: false,
            },
            grid: {
                display: false, // Optional: Disable X-axis grid lines
                color: 'transparent', // Set Y-axis label color
            },
            border: {
                display: false, // Explicitly disable the axis border
            },
        },
        y: {
            ticks: {
                color: '#ccc', // Set Y-axis label color
                display: false,
            },
            grid: {
                display: false, // Optional: Disable Y-axis grid lines
                color: 'transparent', // Set Y-axis label color
            },
            border: {
                display: false, // Explicitly disable the axis border
            },
            beginAtZero: true, // Ensure Y-axis starts at 0
        },
    },
};



// Function to generate random data
export const generateRandomData = (numPoints, min, max) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between min and max
    }
    return data;
  };






  export const pieChart = {}