const data = {
  optionsLine: {
    dataLabels: {
      enabled: false,
    },
    chart: {
      // height: 340,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      stroke: {
        width: 3,
        curve: "smooth",
      },
    },
    colors: ["#01D9B6", "#008FFB"],
    series: [
      {
        name: "Previous Week",
        data: [30, 40, 60, 50, 30, 60, 20, 91],
      },
      {
        name: "This Week",
        data: [50, 10, 60, 20, 30, 20, 70, 21],
      },
    ],
    title: {
      floating: false,
      text: "Customers",
      align: "left",
      style: {
        fontSize: "18px",
      },
    },
    subtitle: {
      text: "168,215",
      align: "center",
      margin: 30,
      offsetY: 40,
      style: {
        color: "#222",
        fontSize: "24px",
      },
    },
    markers: {
      size: 0,
    },

    grid: {},
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetY: -20,
      offsetX: -30,
    },
  },
  options2: {
    chart: {
      id: "sparkline1",
      group: "sparklines",
      type: "area",
      // height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Expenses",
        data: [30, 40, 60, 50, 30, 60, 20, 91],
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetY: -20,
      offsetX: -30,
    },
    colors: ["#DCE6EC"],
    title: {
      text: "₹424,652",
      offsetX: 30,
      style: {
        fontSize: "24px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    subtitle: {
      text: "Sales",
      offsetX: 30,
      style: {
        fontSize: "14px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
  },
  options4: {
    chart: {
      id: "sparkline2",
      group: "sparklines",
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Expenses",
        data: [50, 10, 60, 20, 30, 20, 70, 21],
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetY: -20,
      offsetX: -30,
    },
    colors: ["#DCE6EC"],
    title: {
      text: "₹235,312",
      offsetX: 30,
      style: {
        fontSize: "24px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    subtitle: {
      text: "Expenses",
      offsetX: 30,
      style: {
        fontSize: "14px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
  },

  options3: {
    chart: {
      id: "sparkline3",
      group: "sparklines",
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Profits",
        data: [30, 40, 60, 50, 30, 60, 20, 91],
      },
    ],
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetY: -20,
      offsetX: -30,
    },
    colors: ["#008FFB"],
    //colors: ['#5564BE'],
    title: {
      text: "₹135,965",
      offsetX: 30,
      style: {
        fontSize: "24px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    subtitle: {
      text: "Profits",
      offsetX: 30,
      style: {
        fontSize: "14px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
  },

  options5: {
    chart: {
      type: "donut",
      width: "100%",
      // height: 400,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "75%",
        },
        offsetY: 20,
      },
      stroke: {
        colors: undefined,
      },
    },
    colors: ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"],
    title: {
      text: "Sales Area",
      style: {
        fontSize: "18px",
      },
    },
    series: [21, 23, 19, 14, 6],
    labels: ["Area1", "Area2", "Area3", "Area4", "Area5"],
    legend: {
      position: "left",
      offsetY: 80,
    },
  },
};
export default data;

var mobileDonut = function () {
  if ($(window).width() < 768) {
    donut.updateOptions(
      {
        plotOptions: {
          pie: {
            offsetY: -15,
          },
        },
        legend: {
          position: "bottom",
        },
      },
      false,
      false
    );
  } else {
    donut.updateOptions(
      {
        plotOptions: {
          pie: {
            offsetY: 20,
          },
        },
        legend: {
          position: "left",
        },
      },
      false,
      false
    );
  }
};
