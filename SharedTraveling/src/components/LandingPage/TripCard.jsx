import { useNavigate } from "react-router-dom";

const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-48 h-56 sm:w-56 sm:h-64 text-white shadow-black shadow-sm relative rounded overflow-hidden cursor-pointer"
      onClick={() => navigate(`/trip/${trip?.fields.id}`)}
    >
      <img
        src={trip?.fields.image.fields.file.url}
        className="object-cover w-full h-full hover:scale-110 transition ease-in-out"
        alt={trip?.fields?.description}
      />

      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent to-black p-4 text-white text-center">
        <h3 className="text-lg font-bold">{trip?.fields.title}</h3>
      </div>
    </div>
  );
};

export default TripCard;
