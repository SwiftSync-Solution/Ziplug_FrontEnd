import React, { useState } from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SideBar from "../sideNav/SideBar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const ShipmentDetails = () => {
  // State to store the form input values
  const [shipmentDetails, setShipmentDetails] = useState({
    numOfPackages: "",
    packageWeight: "",
    description: "",
    length: "",
    width: "",
    height: "",
    fragile: "",
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

    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("user_id");

    try {
      const response = await fetch(
        `https://ziplogistics.pythonanywhere.com/api/create-customer-order/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(shipmentDetails),
        }
      );
      console.log(token);
      console.log(userId);

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
                    name="numOfPackages"
                    placeholder="Number of Packages"
                    value={shipmentDetails.numOfPackages}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="packageWeight"
                    placeholder="Package Weight"
                    value={shipmentDetails.packageWeight}
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
                    name="length"
                    placeholder="Length"
                    value={shipmentDetails.length}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="width"
                    placeholder="Width"
                    value={shipmentDetails.width}
                    onChange={handleInputChange}
                    className="input-field p-3 mb-4 border rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={shipmentDetails.height}
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
                        name="fragile"
                        value="Yes"
                        checked={shipmentDetails.fragile === "Yes"}
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
                        name="fragile"
                        value="No"
                        checked={shipmentDetails.fragile === "No"}
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
                  className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-md"
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
