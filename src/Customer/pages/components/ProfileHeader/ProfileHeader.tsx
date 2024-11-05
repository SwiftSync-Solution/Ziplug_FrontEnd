import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NotificationsNoneOutlined } from "@mui/icons-material";
// import Notifications from "../notification/notification";
import { Link } from "react-router-dom";
interface ProfileHeaderProps {
  content: React.ReactNode;
  profilePic: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  content,
  profilePic,
}) => {
  return (
    <>
      <header className="flex justify-between items-center ">
        {content}
        <div className="flex items-center gap-7">
          <Link to="/notification">
            <NotificationsNoneOutlined className="scale-150 border rounded" />
          </Link>

          <Stack>
            {profilePic ? (
              <Avatar alt="profile image" src={profilePic} />
            ) : null}
          </Stack>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
