import { Link } from "react-router-dom";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="bg-blue-900 w-64 text-white p-4 font-bold text-2xl">
          <div className="h-[90vh] grid place-content-center">
            {/* Sidebar Navigation */}
            <NavLink />
          </div>

          {/* Log Out Button */}
          <div className="pl-4 hover:bg-white hover:text-black hover:rounded">
            <Link to="/logout" className="flex items-center space-x-2">
              <LogoutIcon />
              <span>Log Out</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

const NavLink = () => {
  return (
    <nav className="space-y-4">
      <Link
        to="/dashboard"
        className="flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1"
      >
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link
        to="/place-order"
        className="flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1"
      >
        <LocalShippingIcon />
        <span>Place Order</span>
      </Link>
      <Link
        to="/track-shipment"
        className="flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1"
      >
        <AddLocationIcon />
        <span>Track Shipment</span>
      </Link>
      <Link
        to="/help"
        className="flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1"
      >
        <HelpIcon />
        <span>Help</span>
      </Link>
      <Link
        to="/settings"
        className="flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1"
      >
        <SettingsIcon />
        <span>Settings</span>
      </Link>
    </nav>
  );
};

export default SideBar;
