import TotalRefund from "@/components/charts/Total-refund";
import AverageSales from "@/components/charts/average-sales";
import TotalIncome from "@/components/charts/total-income";
import TotalOrders from "@/components/charts/total-orders";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 xl:gap-3 gap-5 max-sm:grid-cols-1">
      <TotalOrders />
      <TotalRefund />
      <AverageSales />
      <TotalIncome />
    </div>
  );
};
export default Stats;
