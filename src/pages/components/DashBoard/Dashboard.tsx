import DashboardContent from "../dashboardPage/DashboardPage";
import SideBar from "../sideNav/SideBar";

const DashBoard = () => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <DashboardContent />
        </main>
      </section>
    </>
  );
};

export default DashBoard;
