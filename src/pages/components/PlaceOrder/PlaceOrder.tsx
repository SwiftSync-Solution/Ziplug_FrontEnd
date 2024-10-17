import { useState, ChangeEvent, FC, FormEvent } from "react";
import SideBar from "../sideNav/SideBar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import sendData from "../../../../utils/sendData";

// Define TypeScript interfaces for the form data
interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  state: string;
  city: string;
  postalCode: string;
  country: string;
}

const PlaceOrder: FC = () => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full px-8 py-5">
          <ProfileHeader
            content={
              <div className="flex gap-2 items-center text-2xl font-bold">
                <LocalShippingIcon />
                Place Order
              </div>
            }
          />

          {/* SENDER INFORMATION */}
          <SenderAndRecipient />
        </main>
      </section>
    </>
  );
};

const SenderAndRecipient: FC = () => {
  // State for sender information
  const [sender, setSender] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    state: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // State for recipient information
  const [recipient, setRecipient] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    state: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // State to track API response or form submission status
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle sender input change
  const handleSenderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSender((prev) => ({ ...prev, [name]: value }));
  };

  // Handle recipient input change
  const handleRecipientChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRecipient((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Combine sender and recipient data into one object
    const formData = {
      sender,
      recipient,
    };

    await sendData(formData, setSuccess, setError, setLoading);
  };

  return (
    <>
      <section className="mt-2">
        {/* Display loading, error or success messages */}
        {loading && (
          <p className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-green-500 rounded-md text-white font-bold">
            Sending order...
          </p>
        )}
        {error && (
          <p className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-red-500 rounded-md text-white font-bold">
            {error}
          </p>
        )}
        {success && (
          <p className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-green-500 rounded-md text-white font-bold">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <header className="font-black text-xl">
            <h1>Sender information</h1>
          </header>
          <section className="flex gap-10">
            {/* GRID ONE */}
            <div>
              <h2 className="font-bold">Personal Details</h2>
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={sender.fullName}
                onChange={handleSenderChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={sender.phoneNumber}
                onChange={handleSenderChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="email"
                name="email"
                placeholder="Email address"
                value={sender.email}
                onChange={handleSenderChange}
              />
            </div>

            {/* GRID TWO */}
            <div>
              <h2 className="font-bold">Personal Details</h2>
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="state"
                placeholder="State"
                value={sender.state}
                onChange={handleSenderChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="city"
                placeholder="City"
                value={sender.city}
                onChange={handleSenderChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="number"
                name="postalCode"
                placeholder="Postal Code"
                value={sender.postalCode}
                onChange={handleSenderChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="country"
                placeholder="Country"
                value={sender.country}
                onChange={handleSenderChange}
              />
            </div>
          </section>

          {/* RECIPIENT INFORMATION */}
          <header className="font-black text-xl mt-7">
            <h1>Recipient information</h1>
          </header>
          <section className="flex gap-10">
            {/* GRID ONE */}
            <div>
              <h2 className="font-bold">Recipient Details</h2>
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={recipient.fullName}
                onChange={handleRecipientChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={recipient.phoneNumber}
                onChange={handleRecipientChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="email"
                name="email"
                placeholder="Email address"
                value={recipient.email}
                onChange={handleRecipientChange}
              />
            </div>

            {/* GRID TWO */}
            <div>
              <h2 className="font-bold">Delivery Address</h2>
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="state"
                placeholder="State"
                value={recipient.state}
                onChange={handleRecipientChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="city"
                placeholder="City"
                value={recipient.city}
                onChange={handleRecipientChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="number"
                name="postalCode"
                placeholder="Postal Code"
                value={recipient.postalCode}
                onChange={handleRecipientChange}
              />
              <br />
              <input
                className="border mt-4 rounded w-80 p-1"
                type="text"
                name="country"
                placeholder="Country"
                value={recipient.country}
                onChange={handleRecipientChange}
              />
            </div>
          </section>

          <Button
            type="submit"
            className="!bg-[#0a1172] !text-white hover:!bg-[#1e3a8a]"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </section>
    </>
  );
};

export default PlaceOrder;
