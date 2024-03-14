import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "bar",
  height: 350,

  series: [
    {
      name: "Total Stock",
      data: [400, 150, 300, 500, 350, 200],

    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#854d0e"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#bdbcb7",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "FASHION",
        "FURNITURE",
        "APPLIANCES",
        "ELECTRONICS",
        "STATIONARY",
        "SHOES",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#bdbcb7",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};


export default function ProductGraph() {
  return (
    <>
      <blockquote class="text-5xl font-semibold text-gray-900 dark:text-white p-4">
        <p className=" font-semibold text-gray-700 py-6">Available Stocks</p>
      </blockquote>
      <Card className="rounded-lg">

        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 md:flex-row md:items-center  rounded-lg"
        >

        </CardHeader>

        <CardBody className=" rounded-lg bg-gray-800">
          <div >
            <select
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
              required

            >

              <option value="January">January</option>
              <option value="February">February</option>
              <option selected="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <Chart {...chartConfig} />
        </CardBody>

      </Card>
    </>
  );
}