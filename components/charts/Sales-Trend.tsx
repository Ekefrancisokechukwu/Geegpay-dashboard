"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const data = [
  {
    revenue: 5.0,
    year: "Jan",
  },
  {
    revenue: 10.0,
    year: "Feb",
  },
  {
    revenue: 70.0,
    year: "Mar",
  },
  {
    revenue: 30.0,
    year: "Apr",
  },
  {
    revenue: 40.0,
    year: "May",
  },
  {
    revenue: 50,
    year: "Jun",
  },
  {
    revenue: 35.0,
    year: "Jul",
  },
  {
    revenue: 60.0,
    year: "Aug",
  },
  {
    revenue: 30.0,
    year: "Sep",
  },
  {
    revenue: 55.0,
    year: "Oct",
  },
  {
    revenue: 60.0,
    year: "Nov",
  },
  {
    revenue: 40.0,
    year: "Dec",
  },
];

const SalesTrend = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload) {
      return (
        <div className="bg-[#090C2C] rounded-2xl text-white text-[0.75rem] py-1 px-3">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="rounded-[0.875rem] bg-white dark:bg-primary-foreground border border-[#EDF2F7] dark:border-gray-100/45">
      <div className="flex flex-row items-center px-4 py-2 justify-between space-y-0 pb-2">
        <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
          Sales Trends
        </h1>
        <div className="flex items-center gap-x-4">
          <span className="md:text-[0.875rem] text-[.65rem] font-medium">
            Short by :{" "}
          </span>
          <Select>
            <SelectTrigger className="w-[90px] rounded-[1.25rem] text-[0.75rem]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
                <SelectItem value="Yearly">Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Tooltip content={<CustomTooltip />} />
              <YAxis />
              <XAxis dataKey="year" />
              <Bar
                dataKey="revenue"
                fill="url(#colorGradient)"
                radius={[20, 20, 0, 0]}
                barSize={30}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34CAA5" stopOpacity={1} />
                  <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default SalesTrend;
