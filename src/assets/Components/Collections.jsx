import one from "../photos/one.png";
import two from "../photos/two.png";
import three from "../photos/three.png";
import four from "../photos/four.jpg"
import five from "../photos/five.png"
import six from "../photos/six.png"
import seven from '../photos/seven.png'
import eight from "../photos/eight.png"
import nine from "../photos/nine.png"


const vehicles = [
  { id: 1, name: "Z650RS | 2025", year: "New 2025", image: one },
  { id: 2, name: "Ninja 1100SX", year: "New 2025", image: two },
  { id: 3, name: "Ninja 500 | 2025", year: "New 2025", image: three },
  {id: 4,  name:"KLX230 | 2025", year:"New 2025", image:four},
  {id: 5,  name:"Versys 650 | 2024", year:"New 2024", image: five}, 
  {id:6, name:"Ninja ZX-6R | 2025", year:"New 2025", image:six},
  {id:7 ,  name:"Ninja ZX-10R | 2025", year:"New 2025",image: seven},
  {id:8 , name:"Z900 | 2024",year:"New 2024", image:eight},
  {id:9 , name:"KLX230R S | 2024", year:"New 2024 ", image:nine}
];

function Collections() {
  return (
    <div className="mt-10 px-6">
      
      <h1 className="font-bold text-3xl inline-block">FEATURE VEHICLES</h1>
      <div className="bg-green-500 h-1 w-40 mt-1"></div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="group flex flex-col items-center p-4">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-48 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-lg font-semibold text-gray-700 mt-2">{vehicle.year}</p>
            <p className="text-xl font-bold text-black mt-1 group-hover:text-green-500">
              {vehicle.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
