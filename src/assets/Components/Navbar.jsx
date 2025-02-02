import Logo from "../photos/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
 
        <div className="font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-32 md:w-40" />
        </div>

    
        <div className="hidden md:flex items-center space-x-4">
          <a href="/services" className="hover:underline">
            Kawasaki Global Web |
          </a>
          <FaLocationDot className="text-green-700 text-xl" />
          <a href="/contact" className="hover:underline">
            Find a dealer |
          </a>
          <CiSearch className="text-3xl hover:cursor-pointer" />
        </div>

        <div className="md:hidden">
      
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
