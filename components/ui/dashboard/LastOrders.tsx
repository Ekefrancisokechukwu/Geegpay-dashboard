import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const lastOrders = [
  {
    img: "/img/avater1.png",
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    img: "/img/avater2.png",
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    img: "/img/avater3.png",
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    img: "/img/avater4.png",
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    img: "/img/avater5.png",
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];

const LastOrders = () => {
  return (
    <div className="bg-white dark:bg-primary-foreground border p-5 border-[#EDF2F7] dark:border-gray-100/45 rounded-[0.875rem]">
      <div className="flex items-center px-1 justify-between">
        <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
          Last Orders
        </h1>
        <button className="md:text-[1.125rem] text-[.8rem] font-medium text-[#34CAA5]">
          See All
        </button>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#9CA4AB] md:text-[1rem] text-[.7rem] font-medium">
                Name
              </TableHead>
              <TableHead className="text-[#9CA4AB] md:text-[1rem]  text-[.7rem] font-medium">
                Date
              </TableHead>
              <TableHead className="text-[#9CA4AB] md:text-[1rem] text-[.7rem] font-medium">
                Amount
              </TableHead>
              <TableHead className="text-[#9CA4AB] md:text-[1rem] text-[.7rem] font-medium">
                Status
              </TableHead>
              <TableHead className="text-[#9CA4AB] md:text-[1rem] text-[.7rem] font-medium">
                Invoice
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lastOrders.map((order, i) => (
              <TableRow key={i}>
                <TableCell className="w-[15rem]">
                  <figure className="flex items-center gap-x-2 mr-6">
                    <Image
                      src={order.img}
                      alt={order.name}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <h3 className="text-[#3A3F51] whitespace-nowrap  dark:text-gray-100/75 md:text-[1rem] text-[.7rem] leading-[1.5rem]">
                      {order.name}
                    </h3>
                  </figure>
                </TableCell>

                <TableCell className="md:text-[1rem] whitespace-nowrap text-[.7rem] text-[#737373] font-normal">
                  {order.date}
                </TableCell>
                <TableCell className="text-[#0D062D] dark:text-gray-100/75  md:text-[1rem] text-[.7rem] font-medium">
                  {order.amount}
                </TableCell>
                <TableCell
                  className={`md:text-[1rem] text-[.7rem]  ${
                    order.status === "Paid"
                      ? "text-[#34CAA5] "
                      : "text-[#ED544E]"
                  }`}
                >
                  {order.status}
                </TableCell>
                <TableCell className="cursor-pointer flex items-center gap-x-2">
                  <svg
                    className="md:block hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                      fill="#292D32"
                      className="dark:fill-gray-200"
                    />
                    <path
                      d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                      fill="#292D32"
                      className="dark:fill-gray-200"
                    />
                    <path
                      d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                      fill="#292D32"
                      className="dark:fill-gray-200"
                    />
                    <path
                      d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                      fill="#292D32"
                      className="dark:fill-gray-200"
                    />
                  </svg>
                  <span className="md:text-[0.875rem] text-[.7rem] text-[#0D062D] dark:text-gray-50">
                    View
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default LastOrders;
