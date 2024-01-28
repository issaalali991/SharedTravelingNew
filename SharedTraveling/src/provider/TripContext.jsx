import { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";
import axios from "axios";
export const TripContext = createContext();

export const Provider = ({ children }) => {
  const [entries, setEntries] = useState(null);
  const [entries2, setEntries2] = useState(null);
  const [searchParams, setSearchParams] = useState(null);


  // const client = createClient({
  //   space: import.meta.env.VITE_SPACE,
  //   accessToken: import.meta.env.VITE_ACCESSTOKEN,
  // });

  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((response) => {
  //       setEntries(response.items.map((item) => item));
  //     })
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/contentful");
        setEntries2(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (entries2) {
      const formattedTrips = entries2.items.map((item) => {
        const asset = entries2.includes.Asset.find((asset) => asset.fields.title === item.fields.title);
        return { fields: { ...item.fields, image: asset } };
      });
      setEntries(formattedTrips);
    }
  }, [entries2]);




  const value = { entries, setEntries, searchParams, setSearchParams };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};
