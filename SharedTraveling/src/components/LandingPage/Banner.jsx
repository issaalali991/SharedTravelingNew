import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../../provider/TripContext";

const Banner = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { entries } = useContext(TripContext);

  const navigate = useNavigate();

  const randomTrip = () => {
    const randomNum = Math.floor(Math.random() * entries?.length);
    navigate(`/trip/${entries[randomNum].fields.id}`);
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  return (
    <div className="bg-[url('src/assets/beach-1751455_1280.jpg')] min-h-136 h-3/4 bg-no-repeat px-12 text-white flex items-center">
      <div className="flex flex-col gap-28 justify-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-oleo">Travel together!</h1>
          <p>Amazing travel destination of your dreams</p>
          
        </div>

        <div className="flex gap-4 justify-center sm:justify-start relative">
          <button className="w-32 p-2 bg-white text-black rounded shadow-black shadow-md" onClick={randomTrip}>
            View Trip
          </button>
          <button className="w-32 p-2 bg-slate-600 rounded shadow-slate-600 shadow-md" onClick={copyUrl}>
            {showInfo ? "Kopiert ✅" : "Share"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
