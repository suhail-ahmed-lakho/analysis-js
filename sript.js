// Sample data for different filters
const dataSets = {
    daily: {
        labels: ["10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        data: [15, 25, 35, 45, 30, 20],
    },
    yesterday: {
        labels: ["10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        data: [20, 30, 40, 50, 40, 30],
    },
    weekly: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [100, 150, 130, 200, 180, 170, 190],
    },
};

// Chart.js setup
let chart;
const ctx = document.getElementById("storeChart").getContext("2d");

function createChart(labels, data) {
    if (chart) chart.destroy(); // Destroy previous chart instance
    chart = new Chart(ctx, {
        type: "line", // Line chart
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Performance",
                    data: data,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Update chart based on filter
function updateChart(filter) {
    const { labels, data } = dataSets[filter];
    createChart(labels, data);
}

// Initialize with Daily Data
updateChart("daily");
