import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SideBar from "../sideNav/SideBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useEffect, useState } from "react";

// Notification data interface
interface Notification {
  id: string;
  orderID: string;
  title: string;
  description: string;
  date: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Fetch notifications from backend API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("/api/notifications"); // Adjust the API endpoint accordingly
        const data: Notification[] = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <section className="flex">
      {/* SIDEBAR */}
      <SideBar />

      {/* Main Content */}
      <main className="w-full p-8">
        <ProfileHeader
          content={
            <div className="flex gap-2 items-center text-2xl font-bold">
              <NotificationsIcon />
              Notifications
            </div>
          }
        />
        <div className="notifications-page p-6">
          <h1 className="text-2xl font-bold mb-6">Notifications</h1>
          <div className="space-y-6">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="notification-card border p-4 rounded-lg shadow-md"
                >
                  <p className="text-gray-500 text-sm">{notification.date}</p>
                  <h2 className="text-lg font-bold mt-2">
                    {notification.title}
                  </h2>
                  <a
                    href={`/orders/${notification.orderID}`}
                    className="text-blue-600"
                  >
                    Order ID: {notification.orderID}
                  </a>
                  <p className="text-gray-700 mt-2">
                    {notification.description}
                  </p>
                </div>
              ))
            ) : (
              <p>No notifications available.</p>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Notifications;
