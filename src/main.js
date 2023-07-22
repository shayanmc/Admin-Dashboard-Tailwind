//   Chart 1
const ctx = document.getElementById("myChart1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number os Sales",
        data: [6, 11, 8, 6, 12, 19],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//   Chart 2

const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number os Sales",
        data: [40, 87, 63, 51, 85, 7],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//   Chart 3

const ctx3 = document.getElementById("myChart3");

new Chart(ctx3, {
  type: "radar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number os Sales",
        data: [34, 63, 43, 51, 45, 17],
        borderWidth: 1,
        backgroundColor: [
          "rgba(96,188,172,0.36)",
        ],
        borderColor: [
          "rgba(96,188,172,0.36)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//   Chart 4

const ctx4 = document.getElementById("myChart4");

new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number os Sales",
        data: [40, 87, 63, 51, 85, 7],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//   Chart 5

const ctx5 = document.getElementById("myChart5");

new Chart(ctx5, {
  type: "doughnut",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number os Sales",
        data: [40, 87, 63, 51, 85, 7],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});