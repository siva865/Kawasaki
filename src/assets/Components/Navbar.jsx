import Logo from "../photos/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


function Navbar() {
  return (
  


        <nav className=" p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className=" font-bold text-xl">
             <img src={Logo} alt="Logo" className="w-40" />

            </div>
            <ul className="flex space-x-4 mr-15  ">
              <li><a href="/services" className=" mr-5 hover:underline">Kawasaki Global Web |
              </a></li>
              <FaLocationDot className="absolute ml-50  text-green-700" />
              <li> <a href="/contact" className=" hover:underline " > Find a dealer |</a></li>
              <CiSearch  className="text-3xl hover:cursor-pointer"/>
            </ul>
          </div>  
        </nav>           
   
  );
}

export default Navbar;
