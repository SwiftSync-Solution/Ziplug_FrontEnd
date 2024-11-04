import SideBar from "../sideNav/SideBar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
const Settings = () => {
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
                <SettingsIcon />
                Settings
              </div>
            }
          />

          <Box
            component="section"
            className="p-3 border rounded-md mt-10 max-w-96"
          >
            <div className="flex justify-between items-center">
              <p className="font-black">Personal Information</p>

              <div className="border p-1 rounded-md">
                <EditIcon />
              </div>
            </div>

            {/* USER DETAILS */}

            <div className="grid gap-2 my-5">
              <Box
                component="section"
                className="py-1 px-3  border rounded-md "
              >
                <span className="font-bold">Name:</span> jasmime John
              </Box>
              <Box
                component="section"
                className="py-1 px-3  border rounded-md "
              >
                <span className="font-bold">Phone Number:</span> 0218829292
              </Box>
              <Box
                component="section"
                className="py-1 px-3  border rounded-md "
              >
                <span className="font-bold">Email Address:</span>{" "}
                johnJames@gmail.com
              </Box>
            </div>
          </Box>
        </main>
      </section>
    </>
  );
};

export default Settings;
