import { Link } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

const SideBar: React.FC = () => {
	return (
		<>
			<div className='flex h-screen'>
				{/* Sidebar */}
				<aside className='bg-blue-900 w-64 text-white p-4 font-bold text-2xl'>
					<div className='h-[90vh] grid place-content-center'>
						{/* Sidebar Navigation */}
						<NavLink />
					</div>

					{/* Log Out Button */}
					<div className='pl-4 hover:bg-white hover:text-black hover:rounded'>
						<Link to='/logout' className='flex items-center space-x-2'>
							<LogoutIcon />
							<span>Log Out</span>
						</Link>
					</div>
				</aside>
			</div>
		</>
	);
};

const NavLink = () => {
	const [activeLink, setActiveLink] = useState<string | null>(null);

	const handleLinkClick = (
		link: string,
		event: React.MouseEvent<HTMLAnchorElement>
	) => {
		event.preventDefault(); // Prevent the default anchor click behavior
		setActiveLink(link);
	};

	return (
		<nav className='space-y-4'>
			<div onClick={(event) => handleLinkClick('link1', event)}>
				<Link
					to='/dashboard'
					className={`p-2 rounded-md ${
						activeLink === 'link1'
							? 'flex items-center space-x-2 bg-white text-black rounded p-1'
							: 'flex items-center space-x-2  hover:bg-white hover:text-black hover:rounded'
					}`}>
					<HomeIcon />
					<span>Home</span>
				</Link>
			</div>

			<div onClick={(event) => handleLinkClick('link2', event)}>
				<Link
					to='/place-order'
					className={`p-2 rounded-md ${
						activeLink === 'link2'
							? 'flex items-center space-x-2 bg-white text-black rounded p-1'
							: 'flex items-center space-x-2  hover:bg-white hover:text-black hover:rounded'
					}`}>
					<LocalShippingIcon />
					<span>Place Order</span>
				</Link>
			</div>

			<div onClick={(event) => handleLinkClick('link3', event)}>
				<Link
					to='/track-shipment'
					className={`p-2 rounded-md ${
						activeLink === 'link3'
							? 'flex items-center space-x-2 bg-white text-black rounded p-1'
							: 'flex items-center space-x-2  hover:bg-white hover:text-black hover:rounded'
					}`}>
					<AddLocationIcon />
					<span>Track Shipment</span>
				</Link>
			</div>

			<div onClick={(event) => handleLinkClick('link4', event)}>
				<Link
					to='/help'
					className={`p-2 rounded-md ${
						activeLink === 'link4'
							? 'flex items-center space-x-2 bg-white text-black rounded p-1'
							: 'flex items-center space-x-2  hover:bg-white hover:text-black hover:rounded'
					}`}>
					<HelpIcon />
					<span>Help</span>
				</Link>
			</div>

			<div>
				<Link
					to='/settings'
					className='flex items-center space-x-2 hover:bg-white hover:text-black hover:rounded p-1'>
					<SettingsIcon />
					<span>Settings</span>
				</Link>
			</div>
		</nav>
	);
};

export default SideBar;
