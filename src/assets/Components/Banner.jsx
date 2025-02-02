import one from "../photos/Banner/one.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Banner() {
  const iconStyle = {
    fontSize: "5rem",
    color: "white",
    margin: "0 1rem",
    cursor: "pointer",
  };

 

  return (
    <div className="relative flex  flex-wrap flex-col items-center justify-center">
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
        <FaAngleLeft style={iconStyle} />
      </div>
      <img src={one} alt="one" className="w-full" />
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
        <FaAngleRight style={iconStyle} />
      </div>

      {/* Banner Title */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 text-center"> {/* Positioned and centered */}
      
     
      </div>

      <button className="absolute bottom-10 bg-black border-2 border-green-700 text-white py-2 px-3 md:py-3 md:px-6 font-semibold text-sm md:text-2xl hover:cursor-pointer z-10">
        Discover More
      </button>
    </div>
  );
}

export default Banner;