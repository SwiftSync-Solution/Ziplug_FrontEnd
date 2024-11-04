import React, { useState } from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SideBar from "../sideNav/SideBar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

interface ShipmentDetails {
  numOfPackages: string;
  packageWeight: string;
  description: string;
  length: string;
  width: string;
  height: string;
  fragile: string;
}

const ShipmentDetails = () => {
  // State to store the form input values
  const [shipmentDetails, setShipmentDetails] = useState({
    num_of_packages: "",
    description: "",
    package_weight: "",
    package_length: "",
    package_width: "",
    package_height: "",
    is_fragile: "",
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipmentDetails({
      ...shipmentDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const generateRandomId = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const token = localStorage.getItem("accessToken");
    const user_id = localStorage.getItem("user_id");
    const pickup_id = generateRandomId(0, 20);
    const rec_id = generateRandomId(0, 20);
    const deli_add_id = generateRandomId(0, 20);

    const requestUrl = `https://ziplogistics.pythonanywhere.com/api/complete-customer-order/${user_id}/pickup=${pickup_id}/recipient=${rec_id}/deliv=${deli_add_id}`;

    const payload = {
      num_of_packages: parseInt(shipmentDetails.num_of_packages, 10),
      description: shipmentDetails.description,
      package_weight: parseFloat(shipmentDetails.package_weight),
      package_length: parseFloat(shipmentDetails.package_length),
      package_width: parseFloat(shipmentDetails.package_width),
      package_height: parseFloat(shipmentDetails.package_height),
      is_fragile: shipmentDetails.is_fragile === "Yes",
    };

    try {
      const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
          Autorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Shipment details submitted successfully!");
        // Do something like redirect to the next page or show a success message
      } else {
        console.error("Failed to submit shipment details");
      }
    } catch (error) {
      console.error("Error submitting shipment details:", error);
    }
  };

  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <ProfileHeader
            content={
              <div className="flex gap-2 items-center text-2xl font-bold">
                <LocalShippingIcon />
                Shipment Details
              </div>
            }
            profilePic="#"
          />
          <div className="shipment-details-container flex flex-col justify-center items-left mt-10">
            <h2 className="text-lg font-bold mb-6">Shipment Details</h2>
            <p className="mb-6">Welcome, Aisha</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-8">
                {/* Package Details */}
                <div>
                  <h3 className="font-medium mb-4">Package Details</h3>
                  <input
                    type="text"
                    name="num_of_packages"
                    placeholder="Number of Packages"
                    value={shipmentDetails.num_of_packages}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="package_weight"
                    placeholder="Package Weight"
                    value={shipmentDetails.package_weight}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description of Contents"
                    value={shipmentDetails.description}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                  />
                </div>

                {/* Package Dimensions */}
                <div>
                  <h3 className="font-medium mb-4">Package Dimensions</h3>
                  <input
                    type="text"
                    name="package_length"
                    placeholder="Length"
                    value={shipmentDetails.package_length}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="package_width"
                    placeholder="Width"
                    value={shipmentDetails.package_width}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="package_height"
                    placeholder="Height"
                    value={shipmentDetails.package_height}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                </div>

                {/* Fragile Package */}
                <div>
                  <h3 className="font-medium mb-4">Is this Package Fragile?</h3>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="is_fragile"
                        value="Yes"
                        checked={shipmentDetails.is_fragile === "Yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      Yes
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="is_fragile"
                        value="No"
                        checked={shipmentDetails.is_fragile === "No"}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 flex space-x-4 mr-4 mb-4">
                <button
                  type="submit"
                  className="btn-primary bg-[#0a1172] text-white px-4 py-2 rounded-md"
                >
                  Submit Shipment
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default ShipmentDetails;
