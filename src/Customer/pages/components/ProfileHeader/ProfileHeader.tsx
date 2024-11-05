import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NotificationsNoneOutlined } from "@mui/icons-material";
// import Notifications from "../notification/notification";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  content: React.ReactNode;
  profilePic?: string;
}

const ProfileHeader = (prop: ProfileHeaderProps) => {
  return (
    <>
      <header className="flex justify-between items-center ">
        {prop.content}
        <div className="flex items-center gap-7">
          <Link to="/notification">
            <NotificationsNoneOutlined className="scale-150 border rounded" />
          </Link>

          <Stack>
            {prop.profilePic ? (
              <Avatar alt="profile image" src={prop.profilePic} />
            ) : null}
          </Stack>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
