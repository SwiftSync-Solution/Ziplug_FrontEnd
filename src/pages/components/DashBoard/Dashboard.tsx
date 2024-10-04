import DashboardContent from "../dashboardPage/DashboardPage";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import SideBar from "../sideNav/SideBar";
import TrackShipment from "../TrackShipment/trackShipment";

const DashBoard = () => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <DashboardContent />
          <TrackShipment />
          <PlaceOrder />
        </main>
      </section>
    </>
  );
};

export default DashBoard;
