import React, { useEffect, useState } from "react";
import axios from "axios";

interface ShipmentData {
  status: string;
  orderId: string;
  origin: string;
  destination: string;
  deliveryDate: string;
  deliverySpeed: string;
  shippingCost: number;
}

const DashboardPage: React.FC = () => {
  const [currentShipment, setCurrentShipment] = useState<ShipmentData | null>(
    null
  );
  const [scheduledPickup, setScheduledPickup] = useState<ShipmentData | null>(
    null
  );
  const [orderHistory, setOrderHistory] = useState<ShipmentData[]>([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome, Aisha</h2>

      {/* Current Shipment & Scheduled Pickup */}
      <div className="flex space-x-6">
        <div className="w-1/2 p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Current Shipment</h3>
          {currentShipment ? (
            <div>
              <p>Order ID: {currentShipment.orderId}</p>
              <p>Origin: {currentShipment.origin}</p>
              <p>Destination: {currentShipment.destination}</p>
              <p>Delivery Date: {currentShipment.deliveryDate}</p>
            </div>
          ) : (
            <p>No current shipment</p>
          )}
        </div>

        <div className="w-1/2 p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Scheduled Pickups</h3>
          {scheduledPickup ? (
            <div>
              <p>Order ID: {scheduledPickup.orderId}</p>
              <p>Pickup Date: {scheduledPickup.deliveryDate}</p>
            </div>
          ) : (
            <p>No scheduled pickups</p>
          )}
        </div>
      </div>

      {/* Order History */}
      <div>
        <h3 className="text-lg font-medium">Order History</h3>
        {orderHistory.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th>Status</th>
                <th>Order ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Delivery Date</th>
                <th>Shipping Cost</th>
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
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">0 Order History</p>
        )}
      </div>

      {/* Filter & Download */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Filter
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
