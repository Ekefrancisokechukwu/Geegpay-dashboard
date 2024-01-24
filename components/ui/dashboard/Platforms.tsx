import ProgressSlider from "../ProgressSlider";

const Platforms = () => {
  return (
    <div className="bg-white dark:bg-primary-foreground border p-5 border-[#EDF2F7] dark:border-gray-100/45 rounded-[0.875rem]">
      <div className="flex items-center justify-between">
        <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
          Top Platform
        </h1>
        <button className="md:text-[1.125rem] text-[.8rem] font-medium text-[#34CAA5]">
          See All
        </button>
      </div>
      <div className="mt-[1.25rem] md:space-y-[1.25rem] space-y-[.9rem]">
        <div>
          <div className="md:space-y-4 space-y-2">
            <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
              Book Bazaar
            </h1>

            <ProgressSlider indicatorColor="#6160DC" value={50} />

            <p className="text-[#525252] flex items-center justify-between md:text-[1.125rem] text-[.8rem] leading-[1.625rem]">
              <span>$2,500,000</span>
              <span>+15%</span>
            </p>
          </div>
        </div>
        <div>
          <div className="md:space-y-[1.25rem] space-y-[.9rem]">
            <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
              Artisan Aisle
            </h1>

            <ProgressSlider indicatorColor="#54C5EB" value={40} />

            <p className="text-[#525252] flex items-center justify-between md:text-[1.125rem] text-[.8rem] leading-[1.625rem]">
              <span>$1,800,000</span>
              <span>+10%</span>
            </p>
          </div>
        </div>
        <div>
          <div className="md:space-y-[1.25rem] space-y-[.9rem]">
            <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
              Toy Troop
            </h1>

            <ProgressSlider indicatorColor="#FFB74A" value={25} />

            <p className="text-[#525252] flex items-center justify-between md:text-[1.125rem] text-[.8rem] leading-[1.625rem]">
              <span>$1,200,000</span>
              <span>+8%</span>
            </p>
          </div>
        </div>
        <div>
          <div className="md:space-y-[1.25rem] space-y-[.9rem]">
            <h1 className="md:text-[1.125rem] text-[.8rem] text-[#26282C] dark:text-gray-300 font-semibold leading-[1.625rem]">
              XStore
            </h1>

            <ProgressSlider indicatorColor="#FF4A55" value={15} />

            <p className="text-[#525252] flex items-center justify-between md:text-[1.125rem] text-[.8rem] leading-[1.625rem]">
              <span> $1,000,000</span>
              <span>+5%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platforms;
