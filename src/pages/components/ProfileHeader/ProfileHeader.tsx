import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import userImage from '../../../assets/3.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';

const ProfileHeader = (prop) => {
	return (
		<>
			<header className='flex justify-between items-center '>
				{prop.content}
				<div className='flex items-center gap-7'>
					<NotificationsIcon className='scale-150 border rounded' />
					<Stack>
						<Avatar alt='profile image' src={userImage} />
					</Stack>
				</div>
			</header>
		</>
	);
};

export default ProfileHeader;
