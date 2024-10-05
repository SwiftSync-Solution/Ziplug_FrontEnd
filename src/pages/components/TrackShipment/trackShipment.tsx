import SideBar from "../sideNav/SideBar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import MapComponent from "./mapComponent";

// Define the shape of the order data
interface OrderData {
  id: string;
  status: string;
  deliveryDate: string;
  driverLocation?: {
    lat: number;
    lng: number;
  };
}

const TrackShipment = () => {
  const [trackingID, setTrackingID] = useState<string>("");
  const [currentOrder, setCurrentOrder] = useState<OrderData | null>(null);
  const [defaultPosition] = useState<[number, number]>([9.082, 8.6753]); // Default to Nigeria
  const [driverPosition, setDriverPosition] = useState<[number, number] | null>(
    null
  );

  // Fetch current order data (this would come from your backend)
  useEffect(() => {
    const fetchCurrentOrder = async () => {
      try {
        const response = await fetch("/api/currentOrder");
        const data: OrderData = await response.json();
        setCurrentOrder(data);
      } catch (error) {
        console.error("Error fetching current order:", error);
      }
    };

    fetchCurrentOrder();
  }, []);

  // Handle tracking the shipment when ID is entered
  const handleTrackShipment = async () => {
    if (trackingID.trim() === "") {
      alert("Please enter a valid Order ID");
      return;
    }

    try {
      const response = await fetch(`/api/trackShipment/${trackingID}`);
      const data: OrderData = await response.json();
      setDriverPosition([
        data.driverLocation?.lat ?? 0,
        data.driverLocation?.lng ?? 0,
      ]);
      setCurrentOrder(data);
    } catch (error) {
      console.error("Error tracking shipment:", error);
    }
  };

  return (
    <>
      <section className="flex fixed">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <ProfileHeader
            content={
              <div className="flex gap-2 items-center text-2xl font-bold">
                <AddLocationIcon />
                Track Location
              </div>
            }
          />
          <div className="shipment-dashboard grid grid-cols-2 gap-4 mt-10 h-screen scroll-smooth">
            {/* Track Shipment Section */}
            <div className="track-shipment-section border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Track Shipment</h2>
              <p className="mb-4">
                Track your package by entering your unique Order ID number to
                get live updates on its status.
              </p>
              <input
                type="text"
                value={trackingID}
                onChange={(e) => setTrackingID(e.target.value)}
                placeholder="Order ID"
                className="border rounded p-2 mb-2 w-full"
              />
              <button
                onClick={handleTrackShipment}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              >
                Track
              </button>
            </div>

            {/* Current Shipment Status */}
            <div className="current-shipment-section border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Current Status</h2>
              {currentOrder ? (
                <div>
                  <p>
                    <strong>Order ID:</strong> {currentOrder.id}
                  </p>
                  <p>
                    <strong>Status:</strong> {currentOrder.status}
                  </p>
                  <p>
                    <strong>Delivery Date:</strong> {currentOrder.deliveryDate}
                  </p>
                </div>
              ) : (
                <p>No current orders.</p>
              )}
            </div>

            {/* Map Section */}
            <div className="col-span-2 mt-8">
              <h2 className="text-xl font-bold mb-4">Shipment Map</h2>
              <MapContainer
                center={defaultPosition}
                zoom={6}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                {driverPosition && (
                  <Marker position={driverPosition}>
                    <Popup>Driver's current location</Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default TrackShipment;
