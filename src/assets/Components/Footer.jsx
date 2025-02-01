import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white text-sm mt-10">
    
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div>
          <h2 className="font-bold text-lg">FOLLOW US ON</h2>
          <div className="flex gap-4 mt-3 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

      
        <div>
          <h2 className="font-bold text-lg">SERVICE & WARRANTY</h2>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">CONTACT US</li>
            <li className="hover:text-white cursor-pointer">LOCATE A DEALER</li>
            <li className="hover:text-white cursor-pointer">USEFUL LINKS</li>
            <li className="hover:text-white cursor-pointer">INTERNATIONAL SITES</li>
          </ul>
        </div>

      
        <div>
          <h2 className="font-bold text-lg">ABOUT KAWASAKI</h2>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">COMPANY</li>
            <li className="hover:text-white cursor-pointer">RIDEOLOGY</li>
            <li className="hover:text-white cursor-pointer">RACING</li>
            <li className="hover:text-white cursor-pointer">HERITAGE</li>
            <li className="hover:text-white cursor-pointer">PRESS</li>
            <li className="hover:text-white cursor-pointer">HISTORY</li>
            <li className="hover:text-white cursor-pointer">CORPORATE INFO</li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-gray-700 text-center py-4">
        <p className="text-gray-400">© 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
