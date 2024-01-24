"use client";

import Image from "next/image";
import { inter } from "../ui/fonts";
import { Area, AreaConfig } from "@ant-design/plots";

const TotalIncome = () => {
  const data = [
    { month: "1991", value: 3 },
    { month: "1992", value: 4 },
    { month: "1993", value: 3.5 },
    { month: "1994", value: 4.8 },
    { month: "1995", value: 4.9 },
    { month: "1996", value: 5 },
    { month: "1997", value: 6 },
    { month: "1998", value: 7 },
    { month: "1999", value: 8 },
    { month: "2000", value: 8.8 },
    { month: "2000", value: 9 },
    { month: "2001", value: 10 },
    { month: "2001", value: 11 },
  ];

  const config: AreaConfig = {
    data,
    xField: "month",
    yField: "value",
    padding: 0,
    appendPadding: [1, 0, 0, 0],
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    animation: false,
    // xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    line: {
      color: "#66C87B",
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#fff 0.2 #77B900 1:#77B900",
      };
    },
  };
  return (
    <div className="w-full overflow-hidden flex flex-col gap-y-[0.625rem] rounded-[0.875rem] bg-white dark:bg-primary-foreground border p-3 border-[#EDF2F7] dark:border-gray-100/45">
      <div className="flex items-center  gap-x-4  w-full justify-between">
        <Image
          src={"/img/Icon 4.svg"}
          alt="vector"
          width={40}
          height={40}
          className="flex-shrink-0 max-[768px]:w-[30px]  max-[768px]:h-[30px]  "
        />
        <div className="flex-grow">
          <Area
            {...config}
            style={{ width: "85%", margin: "0 auto" }}
            height={50}
          />
        </div>{" "}
      </div>
      <div>
        <h1 className="md:text-[1.125rem] text-[.9rem] text-[#898989] font-medium">
          Total Income
        </h1>

        <h2 className="md:text-[1.5rem] text-[.9rem] font-semibold text-[#3A3F51] leading-[2rem]">
          $350.000
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="rounded-[62.5rem] flex items-center gap-x-3 bg-[#34CAA51F] py-[0.25rem] px-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
              stroke="#34CAA5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 0.5H9.5V4"
              stroke="#34CAA5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[0.75rem] text-[#34CAA5] font-medium leading-[1rem] ">
            23,5%
          </span>
        </div>
        <p className={`text-[0.875rem]  text-[#606060] ${inter.className}`}>
          vs. previous month
        </p>
      </div>
    </div>
  );
};
export default TotalIncome;
