import SideBar from '../sideNav/SideBar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

const helpList = [
	{
		header: 'Shipment Tracking',
		subContent:
			'Lost track of your package? Use our real-time tracking tool to follow your shipment’s journey.',
		url: '/track-shipment',
		urlName: 'Track Shipment',
	},
	{
		header: 'Account Assistance',
		subContent:
			'Forgot your password? Trouble logging in? We can help you regain access to your account.',
		url: '/resetpassword',
		urlName: 'Reset Password',
	},
	{
		header: 'Billing and Payments',
		subContent:
			'Need help with an invoice or payment method? Our team is ready to assist with any billing',
		url: '/customer-care',
		urlName: 'Customer Care',
	},
	{
		header: 'Schedule a Pickup',
		subContent:
			'Need to schedule or reschedule a pickup? We’re here to make it easy.',
		url: '/schedule-pickup',
		urlName: 'Schedule A Pickup',
	},
	{
		header: 'Order Issues',
		subContent:
			'Is your package delayed, missing, or damaged? Contact us, and we’ll help resolve it quickly.',
		url: '/customer-care',
		urlName: 'Customer Care',
	},
];

const HelpItem = ({ header, subContent, url, urlName }) => (
	<Box
		component='section'
		className='p-3 border rounded-md flex justify-between items-center'>
		<div>
			<h2 className='font-black'>{header}</h2>
			<p>{subContent}</p>
		</div>

		<div className='mr-5  w-40 text-center bg-[#1E3A8A] text-white font-bold p-1 rounded-md'>
			<Link to={url} className='' rel=''>
				{urlName}
			</Link>
		</div>
	</Box>
);

const Help = () => {
	return (
		<section className='flex'>
			{/* SIDEBAR */}
			<div className='fixed'>
				<SideBar />
			</div>

			{/* Main Content */}
			<main className='w-full px-8 py-5 ml-64'>
				<ProfileHeader
					content={
						<div className='flex gap-2 items-center text-2xl font-bold'>
							<HelpIcon />
							Help
						</div>
					}
				/>
				<div className='my-3'>
					<h2>How Can We Help?</h2>
				</div>
				{/* HELP SECTION */}
				<section className='grid gap-3'>
					{helpList.map((helpItem) => (
						<HelpItem key={helpItem.header} {...helpItem} />
					))}
				</section>
				{/* LIVE CHAT */}
				<div className='absolute bottom-10'>
					<Link to='#' className='flex items-center gap-3'>
						<MarkChatUnreadIcon className='text-[#1E3A8A] scale-150' />
						<p className='underline underline-offset-4 '>Live Chat</p>
					</Link>
				</div>
			</main>
		</section>
	);
};

export default Help;