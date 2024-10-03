import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ProfileHeader = () => {
	return (
		<>
			<header className='flex justify-between items-center '>
				<h2 className='text-2xl font-semibold'>Welcome, Aisha</h2>
				<Stack>
					<Avatar alt='profile image' src='' />
				</Stack>
			</header>
		</>
	);
};

export default ProfileHeader;
