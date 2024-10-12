import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import userImage from "../../../assets/3.jpg";
import { NotificationsNoneOutlined } from "@mui/icons-material";
// import Notifications from "../notification/notification";
import { Link } from "react-router-dom";

const ProfileHeader = (prop) => {
  return (
    <>
      <header className="flex justify-between items-center ">
        {prop.content}
        <div className="flex items-center gap-7">
          <Link to="/notification">
            <NotificationsNoneOutlined className="scale-150 border rounded" />
          </Link>

          <Stack>
            <Avatar alt="profile image" src={userImage} />
          </Stack>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
