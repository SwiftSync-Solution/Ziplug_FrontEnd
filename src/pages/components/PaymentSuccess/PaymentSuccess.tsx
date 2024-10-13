import SideBar from '../sideNav/SideBar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const PaymentSuccess = () => {
	return (
		<>
			<section className='flex'>
				{/* SIDEBAR */}
				<SideBar />

				{/* Main Content */}
				<main className='w-full p-8'>
					<ProfileHeader
						content={<h2 className='text-2xl font-semibold'>Welcome, Aisha</h2>}
					/>

					<div className='p-10 border border-black max-w-96 mt-10'>
						<div>
							<ThumbUpAltIcon />
						</div>
						<div>
							<h2>Payment Confirmed</h2>
							<h3 className='text-blue-600 font-bold'>ORDER ID: RVC11234876</h3>
						</div>
					</div>
				</main>
			</section>
		</>
	);
};

export default PaymentSuccess;
