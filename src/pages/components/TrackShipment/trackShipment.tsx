import SideBar from "../sideNav/SideBar";
const TrackShipment = () => {
  return (
    <>
      <section className="flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main Content */}
        <main className="w-full p-8">{/* <ProfileHeader /> */}</main>
      </section>
    </>
  );
};

export default TrackShipment;
