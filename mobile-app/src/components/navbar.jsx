import "./navbar.css";
import { BsBatteryHalf } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { FiBell } from "react-icons/fi";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container" >
        <div className="nav-left">
          <h1>9:41</h1>
        </div>
        <div className="nav-right">
          <GiNetworkBars className="icon" />
          <BiWifi className="icon" />
		  <BsBatteryHalf className="icon" />
        </div>
        <div className="nav-clear"></div>
		<div className="nav-left">
          <h1><HiMenu className="icon" /></h1>
        </div>
        <div className="nav-right">
          <BsCart2 className="icon" />
          <FiBell className="icon" />
        
        </div>
        <div className="nav-clear"></div>
      </div>
    </>
  );
};
