import { useState, useEffect } from "react";
import { createClient } from "contentful";
import DetailView from "./components/DetailView/DetailView";
import FeaturedTrips from "./components/LandingPage/FeaturedTrips";
import NavBar from "./components/Global/Navbar";
import Hero from "./components/LandingPage/Hero";
import Footer from "./components/Global/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Global/NotFound";
import Faq from "./components/LandingPage/Faq";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESSTOKEN,
});

function App() {
  return (
    <div className="bg-gray-950">
      <div className="max-w-screen-xl mx-auto">
      
        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/trip/:tripId" element={<DetailView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Faq />
          <Footer />
        </BrowserRouter>

        {/* <FeaturedTrips items={entries} /> */}
      </div>
      
    </div>
  );
}
export default App;
