import { useContext, useEffect, useRef, useState } from "react";
import ScrollButton from "./ScrollButton";
import { TripContext } from "../../provider/TripContext";
import TripCard from "./TripCard";
import scrollLeftIcon from "../../assets/icons/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";
import scrollRightIcon from "../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz24.svg";

const TripCards = () => {
  const { entries, searchParams } = useContext(TripContext);
  const scrollableContainer = useRef();
 
  const scroll = (value) => {
    scrollableContainer.current.scrollLeft += value;
  };
 const [temp,setTemp]=useState(entries) ; 

 useEffect(() => {
     setTemp(entries)
  }
  , [searchParams,entries]);
  useEffect(() => {
    searchParams?.query === "" && setTemp(entries);
    entries&& searchParams&&
        setTemp((entries)=>entries.filter((entry)=>entry.fields.description.toLowerCase().includes(searchParams.query.toLowerCase()))) 
           
  }, [searchParams]);

  return (
    <div className="relative mb-16">
      <div
        ref={scrollableContainer}
        className="overflow-x-scroll hide-scrollbar scroll-smooth -mt-16"
      >
        <div className="w-full">
          <div className="flex gap-4 min-w-max ">
            {temp &&  
              temp.map((trip) => (
                <TripCard trip={trip} key={trip.fields.id} />
              ))}
          </div>
        </div>
      </div>
      <ScrollButton
        position={"left-2"}
        icon={scrollLeftIcon}
        value={-200}
        scroll={scroll}
      />
      <ScrollButton
        position={"right-2"}
        icon={scrollRightIcon}
        value={200}
        scroll={scroll}
      />
    </div>
  );
};

export default TripCards;
