import SalesTrend from "@/components/charts/Sales-Trend";
import { MiniCharts, RevenueChartSkeleton } from "@/components/ui/Skeleton";
import Header from "@/components/ui/dashboard/Header";
import LastOrders from "@/components/ui/dashboard/LastOrders";
import Platforms from "@/components/ui/dashboard/Platforms";
import Stats from "@/components/ui/dashboard/Stats";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-5 px-6 py-3">
        <div className="flex items-start xl:flex-row flex-col-reverse  gap-y-5  gap-x-5">
          <div className="xl:w-[48rem] w-full">
            <Suspense fallback={<RevenueChartSkeleton />}>
              <SalesTrend />
            </Suspense>
          </div>
          <div className="flex-grow xl:w-auto w-full">
            <Suspense fallback={<MiniCharts />}>
              <Stats />
            </Suspense>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-y-5  gap-x-5 mt-8">
          <div className="xl:w-[48rem]">
            <LastOrders />
          </div>

          <div className="flex-grow">
            <Platforms />
          </div>
        </div>
      </div>
    </main>
  );
}
