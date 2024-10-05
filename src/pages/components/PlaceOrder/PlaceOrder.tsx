import SideBar from "../sideNav/SideBar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const PlaceOrder = () => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">
          <ProfileHeader />
        </main>
      </section>
    </>
  );
};

export default PlaceOrder;
