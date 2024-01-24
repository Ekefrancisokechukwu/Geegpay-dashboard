const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 dark:bg-primary/10 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-primary/10" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 dark:bg-primary/10 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white dark:bg-primary/10 px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200 dark:bg-primary/10" />
      </div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="rounded-xl bg-gray-100 dark:bg-primary/10 p-4">
        <div className="mt-0 grid h-[260px] grid-cols-12 items-end gap-2 rounded-md bg-white dark:bg-primary/10  p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-primary/10" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-primary/10" />
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-primary/10"></div>
          <div className="h-6 w-24 rounded bg-gray-100 dark:bg-primary/10"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100 dark:bg-primary/10"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-primary/10"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-primary/10"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-primary/10"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-primary/10"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-primary/10"></div>
        </div>
      </td>
    </tr>
  );
}

export function PlatformSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200 dark:bg-primary/10" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200 dark:bg-primary/10" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-primary/10" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-primary/10" />
    </div>
  );
}

export function LatestPlatformSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100 dark:bg-primary/10" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 dark:bg-primary/10 p-4">
        <div className="bg-white dark:bg-primary/10 px-6">
          <PlatformSkeleton />
          <PlatformSkeleton />
          <PlatformSkeleton />
          <PlatformSkeleton />
          <PlatformSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-primary/10" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-primary/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const MiniCharts = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3  flex-grow">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default function DashboardSkeleton() {
  return (
    <>
      <div className="py-3 px-4 flex items-center justify-between border-b">
        <div
          className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-200 dark:bg-primary/10`}
        />

        <div className="flex items-center gap-x-40">
          <div
            className={`${shimmer} relative md:block hidden mb-4 h-8 w-44 overflow-hidden rounded-md bg-gray-200 dark:bg-primary/10`}
          />
          <div
            className={`${shimmer} relative mb-4 h-8 w-8 md:block hidden  overflow-hidden rounded-full bg-gray-200 dark:bg-primary/10`}
          />
          <div
            className={`${shimmer} relative mb-4 h-8 w-10 overflow-hidden rounded-md bg-gray-200 dark:bg-primary/10`}
          />
        </div>
      </div>

      <div className="mt-6 px-4 flex lg:flex-row flex-col-reverse gap-5">
        <div className="lg:w-[48rem]">
          <RevenueChartSkeleton />
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3  flex-grow">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
      <div className="mt-6 px-4">
        {/* <TableRowSkeleton /> */}
        <LatestPlatformSkeleton />
      </div>
    </>
  );
}
