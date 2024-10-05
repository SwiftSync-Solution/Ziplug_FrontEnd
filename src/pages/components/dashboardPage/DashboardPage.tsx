import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";

interface ShipmentData {
  status: string;
  orderId: string;
  origin: string;
  destination: string;
  deliveryDate: string;
  deliverySpeed: string;
  shippingCost: number;
}

const DashboardContent: React.FC = () => {
  const [currentShipment, setCurrentShipment] = useState<ShipmentData | null>(
    null
  );
  const [scheduledPickup, setScheduledPickup] = useState<ShipmentData | null>(
    null
  );
  const [orderHistory, setOrderHistory] = useState<ShipmentData[]>([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from backend
        const currentResponse = await axios.get("/api/current-shipment");
        const pickupResponse = await axios.get("/api/scheduled-pickup");
        const historyResponse = await axios.get("/api/order-history");

        setCurrentShipment(currentResponse.data);
        setScheduledPickup(pickupResponse.data);
        setOrderHistory(historyResponse.data);
      } catch (error) {
        console.error("Error fetching shipment data", error);
      } finally {
        // setLoading(false);
      }
    };

    // fetchData(); //! donot call or you would get an error
  }, []);

  return (
    <div className="space-y-6">
      {/* PROFILE HEADER */}
      <ProfileHeader
        content={<h2 className="text-2xl font-semibold">Welcome, Aisha</h2>}
      />
      {/* Current Shipment & Scheduled Pickup */}
      <div className="flex space-x-6">
        <div className="w-1/2 p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">
            Current Shipment
            <NotificationsNoneIcon className="scale-150 border rounded float-right" />
          </h3>
          {currentShipment ? (
            <div>
              <p>Order ID: {currentShipment.orderId || "12345"}</p>
              <p>Origin: {currentShipment.origin || "lagos"}</p>
              <p>Destination: {currentShipment.destination || "ipaja"}</p>
              <p>Delivery Date: {currentShipment.deliveryDate || "9999"}</p>
            </div>
          ) : (
            <p>
              Ready to ship? Place an order and get your package on its way!
            </p>
          )}
          <div>
            <button
              type="button"
              className="px-4 py-0.5 bg-blue-600 text-white rounded float-right"
            >
              <Link to="/place-order">Place Order</Link>
            </button>
          </div>
        </div>

        <div className="w-1/2 p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">
            Scheduled Pickups{" "}
            <NotificationsNoneIcon className="scale-150 border rounded float-right" />
          </h3>
          {scheduledPickup ? (
            <div>
              <p>Order ID: {scheduledPickup.orderId}</p>
              <p>Pickup Date: {scheduledPickup.deliveryDate}</p>
            </div>
          ) : (
            <p className="mb-4">
              Easily schedule your pickup and let us handle the rest!
            </p>
          )}
          <div>
            <button
              type="button"
              className="px-4 py-0.5 bg-blue-600 text-white rounded float-right"
            >
              <Link to="/place-order">Schedule</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div>
        <h3 className="text-lg font-bold">Order History</h3>
        {/* Filter & Download */}
        <div className="flex  gap-4 my-4 float-right">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Filter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Download PDF
          </button>
        </div>
        {orderHistory.length >= 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border border-gray-500">
                <th className="border border-gray-500">Status</th>
                <th className="border border-gray-500">Order ID</th>
                <th className="border border-gray-500">Origin</th>
                <th className="border border-gray-500">Destination</th>
                <th className="border border-gray-500">Delivery Date</th>
                <th className="border border-gray-500">Shipping Cost</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.status}</td>
                  <td>{order.orderId}</td>
                  <td>{order.origin}</td>
                  <td>{order.destination}</td>
                  <td>{order.deliveryDate}</td>
                  <td>${order.shippingCost}</td>
                </tr>
              ))}

              {/* // ! remove after backend works fine */}
              <tr className="text-center">
                <td className="border border-gray-500">success</td>
                <td className="border border-gray-500">1234</td>
                <td className="border border-gray-500">lagos</td>
                <td className="border border-gray-500">ibadan</td>
                <td className="border border-gray-500">2nd january 2024</td>
                <td className="border border-gray-500">$300</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">0 Order History</p>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
