import logo from "../assets/logo.webp";
import NewsBanner from './NewsBanner'; // Import the NewsBanner component
import BackGround from '../assets/Background.webp';
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div style={{ background: "linear-gradient(to right, #1b263b, #1e3c72, #121212)" }}>
 {location.pathname === "/" && <NewsBanner />}
      <nav className="grid lg:grid-cols-2 grid-cols-1 items-center  justify-between  text-white p-4">
        <div className="flex items-center">
          <img src={logo} alt="College Logo" className="w-auto h-20 mr-2" />
          <div>
            <h1 className="lg:text-2xl text-xl uppercase tracking-wider font-bold ">
              Centre for Immersive Technologies
            </h1>
          </div>
        </div>
        <div className="flex items-center lg:justify-self-end">
          <p className="mr-4">
            <div className="flex flex-col justify-items-end px-2">
              <h1 className="text-lg font-semibold align-center">
                College of Engineering Guindy
              </h1>

              <h1 className="text-lg font-semibold align-center ">
                Anna University Chennai
              </h1>
            </div>
          </p>
        </div>
      </nav>
      <div className='lg:col-span-2'>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
