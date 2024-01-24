const ProgressSlider = ({ value = 50, indicatorColor = "#333" }) => {
  return (
    <div className="relative md:h-[0.75rem] h-[.5rem] w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-3xl w-full flex-1 bg-primary transition-all"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          background: indicatorColor,
        }}
      ></div>
    </div>
  );
};
export default ProgressSlider;
