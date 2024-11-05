import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { NotificationsNoneOutlined } from '@mui/icons-material';
// import Notifications from "../notification/notification";
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const ProfileHeader = (prop) => {
=======

interface ProfileHeaderProps {
	content: React.ReactNode;
	profilePic?: string;
}

const ProfileHeader = (prop: ProfileHeaderProps) => {
>>>>>>> 0cf5b2067786f988d84b3b1b676ae6c60d39c686
	return (
		<>
			<header className='flex justify-between items-center '>
				{prop.content}
				<div className='flex items-center gap-7'>
					<Link to='/notification'>
						<NotificationsNoneOutlined className='scale-150 border rounded' />
					</Link>

					<Stack>
<<<<<<< HEAD
						<Avatar alt='profile image' src={prop.profilePic} />
=======
						{prop.profilePic ? (
							<Avatar alt='profile image' src={prop.profilePic} />
						) : null}
>>>>>>> 0cf5b2067786f988d84b3b1b676ae6c60d39c686
					</Stack>
				</div>
			</header>
		</>
	);
};

export default ProfileHeader;
