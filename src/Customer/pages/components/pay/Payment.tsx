import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SideBar from "../sideNav/SideBar";
import PaymentIcon from "@mui/icons-material/Payment";

interface PaymentProps {
  email: string;
  amount: number;
}

const Payment: React.FC<PaymentProps> = ({ email, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState("Paystack");

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack accepts the amount in kobo (so multiply by 100)
    publicKey: "your-paystack-public-key", // Replace with zip public key
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    console.log("Payment successful!", reference);
    // Redirect user or show success message
  };

  const onClose = () => {
    console.log("Payment closed.");
    // Handle when payment modal is closed
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "Paystack") {
      initializePayment(onSuccess, onClose);
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
                <PaymentIcon />
                Payment
              </div>
            }
          />
          <div className="payment-container mt-10 flex justify-left items-center">
            <div className="payment-card w-1/3 p-8 border rounded-md shadow-lg">
              <h2 className="text-lg font-bold mb-4">Make Payment</h2>

              <form onSubmit={handlePayment}>
                <div className="mb-4">
                  <label
                    htmlFor="payment-method"
                    className="block mb-2 text-sm font-medium"
                  >
                    Payment Method
                  </label>
                  <select
                    id="payment-method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="input-field p-3 border rounded-md w-full"
                  >
                    <option value="Paystack">Paystack</option>
                    {/* Add more payment methods here */}
                  </select>
                </div>

                {/* <button
                  type="submit"
                  className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-md w-full"
                >
                  Make Payment
                </button>

                <button
                  type="button"
                  className="btn-secondary mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-full"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </button> */}
              </form>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex space-x-4 mr-4 mb-4">
            <button
              type="button"
              className="btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>

            <button
              type="submit"
              className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Make Payment
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Payment;
