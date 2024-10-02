import React from "react";
import { Link } from "react-router-dom";

interface DashboardLayoutProps {
  user: {
    name: string;
    image: string;
  };
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  children,
}) => {
  return (
    <div className="flex h-screen scroll-smooth">
      {/* Sidebar */}
      <aside className="bg-blue-900 w-64 text-white p-4">
        <div className="flex flex-col space-y-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <img
              src={user.image || "https://source.unsplash.com/50x50/?portrait"}
              alt="Profile"
              className="rounded-full"
            />
            <div>
              <p>Welcome, {user.name || "User"}</p>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="space-y-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link to="/place-order" className="flex items-center space-x-2">
              <i className="fas fa-box"></i>
              <span>Place Order</span>
            </Link>
            <Link to="/track-shipment" className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>Track Shipment</span>
            </Link>
            <Link to="/help" className="flex items-center space-x-2">
              <i className="fas fa-question-circle"></i>
              <span>Help</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-2">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </Link>
          </nav>

          {/* Log Out Button */}
          <Link to="/logout" className="mt-auto flex items-center space-x-2">
            <i className="fas fa-sign-out-alt"></i>
            <span>Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
