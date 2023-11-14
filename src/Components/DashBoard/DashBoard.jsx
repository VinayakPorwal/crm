import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import data from "./DataFile";
function DashBoard() {
  return (
    <>
      <section className="">
        <div className="py-8 px-2 mx-auto max-w-screen-xl lg:py-4">
          <div className="text-black dark:text-white py-4 px-2 m-2 text-xl font-bold">
            Welcome Username,
          </div>
          <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 mb-8">
            <div className="py-4 px-2 m-2 text-sm absolute bottom-0 right-0">
              *Last 7 days
            </div>
            <div class="w-full">
              <div class="flex flex-wrap sm:flex-nowrap justify-between items-center mb-5 sm:max-h-[24vh] ">
                <Chart
                  options={data.options2}
                  series={data.options2.series}
                  type="area"
                  width="100%"
                  height="150"
                  className="bg-white rounded-lg shadow dark:bg-gray-800 m-2"
                />
                <Chart
                  options={data.options4}
                  series={data.options4.series}
                  type="area"
                  width="100%"
                  height="150"
                  className="bg-white rounded-lg shadow dark:bg-gray-800 m-2"
                />
                <Chart
                  options={data.options3}
                  series={data.options3.series}
                  type="area"
                  width="100%"
                  height="150"
                  className="bg-white rounded-lg shadow dark:bg-gray-800 m-2"
                />
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="md:grid-cols-2 gap-8 hidden sm:grid">
            <div>
              {/* <div className="py-4 px-2 m-2 text-xl font-bold">
                Welcome Username,
              </div> */}
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <Chart
                  options={data.optionsLine}
                  series={data.optionsLine.series}
                  type="area"
                  height="400"
                />
              </div>
            </div>

            {/* third */}
            <div>
              {/* <div className="py-4 px-2 m-2 text-xl font-bold">
                Welcome Username,
              </div> */}
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <Chart
                  options={data.options5}
                  series={data.options5.series}
                  type="donut"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashBoard;
