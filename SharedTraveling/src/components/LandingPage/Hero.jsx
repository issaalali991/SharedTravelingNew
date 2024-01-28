import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../../provider/TripContext";
import TripCards from "./TripCards";
import Banner from "./Banner";

const Hero = () => {
  return (
    <section className="h-3/4-screen">
      <Banner />
      
      

      <TripCards />
    </section>
  );
};
export default Hero;
