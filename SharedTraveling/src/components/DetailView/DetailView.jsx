import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Outlet, useParams } from "react-router-dom";
import { TripContext } from "../../provider/TripContext";

const DetailView = () => {
  const [weather, setWeather] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { entries } = useContext(TripContext);
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [firstSentence, setFirstSentence] = useState(null);

  const getWeather = async () => {
    const response = await axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${trip.des[0]}&longitude=${trip.des[1]}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    setTrip(entries.find((entry) => entry.fields.id == tripId).fields);
  }, [entries]);

  useEffect(() => {
    if (!trip) return;
    setFirstSentence(trip.description.split(".")[0]);
    getWeather();
  }, [trip]);

  if (!entries | !tripId | !trip) return <>Error</>;

  return (
    <div className="flex justify-center items-start min-h-screen bg-opacity-20">
      <div className=" bg-gray-800  text-white my-4 p-8 rounded-none sm:rounded-2xl w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-3/5 pr-4 md:pr-8 mb-4 md:mb-0">
            <h2 className="font-bold text-xl pb-4">{trip.title}</h2>
            <p className="font-semibold mb-4 text-gray-300">
              {trip.startDate} - {trip.endDate}
            </p>
            <p className="font-semibold mb-4">
              From {trip.startLocation} to {trip.endLocation}
            </p>

            <img className="h-20 mx-2 my-6" src="/bus_8.png" />

            <div className="mb-4 text-gray-300">
              <p className="font-semibold">Description:</p>
              <p>
                {showMore ? trip.description : `${firstSentence}... `}
                <button
                  className="text-blue-500 hover:underline focus:outline-none"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <MapContainer
              className="h-80 w-full rounded-lg"
              center={trip.des}
              zoom={5}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={trip.des}>
                <Popup>
                  <div>
                    <p>Trip Destination</p>
                    {weather && (
                      <>
                        <p>Temperature: {weather.current.temperature_2m} °C</p>
                        <p>Wind Speed: {weather.current.wind_speed_10m} m/s</p>
                      </>
                    )}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
