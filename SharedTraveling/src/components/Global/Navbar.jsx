import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TripContext } from "../../provider/TripContext";

const NavBar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchParams, setSearchParams } = useContext(TripContext);
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ ...searchParams, query: searchText });
    setSearchText("");
  };

  return (
    <nav className="h-30 rounded-t-lg flex justify-between items-center flex-grow bg-gray-950 px-5 py-5 ps-12">
      <div className="flex items-center space-x-4 flex-grow">
        <div className="rounded-full bg-white w-12 h-12 overflow-hidden flex justify-center">
          <Link to="/" onClick={()=>setSearchParams({  query: '' })}>
            <img
              src="/src/assets/Pictures/BullyOneTest.jpg"
              alt="SharedTravelLogo"
            />
          </Link>
        </div>

        <ul className="flex items-center space-x-4 flex-grow ">
          <Link to="/trip">
            <li className="basis-1/4 hover:text-orange-300 text-white font-oleo font-bold py-2 px-4">
              TRIPS
            </li>
          </Link>
          <li className="basis-3/4 hover:text-orange-300 text-white text-center font-oleo font-bold py-2 px-4">
            SharedTraveling
          </li>
        </ul>
      </div>

      <div className="flex justify-end ">
        <form className="flex items-center pe-8">
          <input
           className="bg-orange-200 border-double border-2 border-white-500 rounded py-1 px-8 mr-5 font-oleo text-sm text-white"
            type="text"
            name="search"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button
            className="flex bg-black text-orange-300 text-sm rounded-full border-solid border-2 border-orange-500 py-1 px-1 hover:bg-orange-800 transition duration-300 font-oleo font-bold py-1 px-2 "
            onClick={handleSearchSubmit}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
