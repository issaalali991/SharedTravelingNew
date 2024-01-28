const ScrollButton = ({ position, icon, value, scroll }) => {
  return (
    <div
      className={`hidden sm:flex justify-center items-center absolute ${position} top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-slate-700 cursor-pointer hover:bg-slate-800 transition duration-300`}
      onClick={() => scroll(value)}
    >
      <img src={icon} alt="chevron left icon" />
    </div>
  );
};

export default ScrollButton;
