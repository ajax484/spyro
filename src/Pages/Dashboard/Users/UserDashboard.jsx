import React from "react";
import Chart from "react-apexcharts";
import { barChartOptions } from "../../../utils";

const usersinfo = [
  {
    label: "Total Registered Users",
    value: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        height="3em"
        width="3em"
        fill="#007BFF"
      >
        {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
    ),
  },
  {
    label: "Online Users",
    value: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        height="3em"
        width="3em"
        fill="#007BFF"
      >
        {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
      </svg>
    ),
  },
  {
    label: "Visiters Today (Registered)",
    value: 0,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        height="3em"
        width="3em"
        fill="#007BFF"
      >
        {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304c0-8.8-7.2-16-16-16z" />
      </svg>
    ),
  },
];

const currentMonthData = [
  {
    data: [
      {
        x: 1,
        y: 1,
      },
    ],
  },
];

const currentYearData = [
  {
    data: [
      {
        x: 1,
        y: 1,
      },
      {
        x: 2,
        y: 2,
      },
      {
        x: 3,
        y: 1,
      },
    ],
  },
];

export default function UserDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-4">
        {usersinfo.map((info) => (
          <InfoCard key={info.label} info={info} />
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px]">
          <div className="border-b-[1px] border-gray-200 px-4 py-4">
            <h3 className="text-lg font-bold">Registered User Countries</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2">
              <div className="">
                <div className="mt-3">
                  <div className="text-center">
                    <p className="fs-12 mt-6">Google Maps is Disabled</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-3 space-y-2">
                  <h6 className="font-bold">Top 30 Countries</h6>
                  <ul className="flex">
                    <li className="country">
                      Ireland - <span>4</span>
                    </li>
                    <li className="country">
                      {" "}
                      - <span>1</span>
                    </li>
                    <li className="country">
                      Nigeria - <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px]">
          <div className="border-b-[1px] border-gray-200 px-4 py-4">
            <h3 className="text-lg font-bold">
              New Registered Users{" "}
              <span className="text-gray-500">(Current Month)</span>
            </h3>
          </div>
          <div className="card-body mb-3 mt-3">
            <Chart
              options={barChartOptions({
                xtotal: 31,
                ytotal: 1,
              })}
              series={currentMonthData}
              type="bar"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px]">
          <div className="border-b-[1px] border-gray-200 px-4 py-4">
            <h3 className="text-lg font-bold">
              New Registered Users{" "}
              <span className="text-gray-500">(Current Year)</span>
            </h3>
          </div>
          <div className="card-body mb-3 mt-3">
            <Chart
              options={barChartOptions({
                xtotal: 12,
                ytotal: 1,
              })}
              series={currentYearData}
              type="bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ info }) {
  return (
    <div className="bg-white shadow-md rounded-xl border-gray-100 py-4 px-6 overflow-hidden border-[1px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="mb-3 text-sm font-bold mt-1">{info.label}</p>
          <h2 className="mb-0">
            <span className="text-4xl font-bold">{info.value}</span>
          </h2>
        </div>
        {info.icon}
      </div>
    </div>
  );
}
