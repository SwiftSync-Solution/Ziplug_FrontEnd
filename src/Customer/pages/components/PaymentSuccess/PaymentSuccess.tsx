import SideBar from "../sideNav/SideBar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

interface PaymentSuccessProps {
  orderNumber: string;
}

const PaymentSuccess = ({ orderNumber }: PaymentSuccessProps) => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <ProfileHeader
            content={<h2 className="text-2xl font-semibold">Welcome, Aisha</h2>}
            profilePic="#"
          />
          <div className="p-10 border border-black max-w-lg mt-10 flex items-center gap-10">
            <div className="bg-blue-700 text-white p-7 rounded-full outline outline-4 outline-slate-950">
              <ThumbUpAltIcon className="scale-150" />
            </div>
            <div>
              <h2 className="font-bold">Payment Confirmed</h2>
              <h3 className="text-blue-600 font-bold">
                ORDER ID: {orderNumber}
              </h3>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default PaymentSuccess;
