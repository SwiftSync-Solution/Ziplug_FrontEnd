import SideBar from '../sideNav/SideBar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import { Avatar } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import CallIcon from '@mui/icons-material/Call';

interface OrderDetailsProps {
	content: {
		orderId: string;
		orderDate: string;
		// Add other properties of content here
	};
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ content }) => {
	return (
		<>
			<section className='flex'>
				{/* SIDEBAR */}
				<div className='fixed'>
					<SideBar />
				</div>

				{/* Main Content */}
				<main className='w-full p-8 ml-64'>
					<ProfileHeader
						content={<h2 className='text-2xl font-semibold'>Welcome, Aisha</h2>}
						profilePic='#'
					/>

					{/* ORDER DETAILS SECTION */}
					<section className='h-full'>
						{/* OrderId and Date */}
						<div className='mt-5'>
							<h2 className='font-bold text-2xl'>
								Order ID: {content.orderId}
							</h2>
							<p className='text-gray-500'>{content.orderDate}</p>
						</div>

						{/* ORDER STATUS */}
						<section className='grid grid-cols-3 gap-5 justify-around my-5'>
							<div className='p-5 bg-gray-200 rounded-lg'>
								{/* Location */}
								<LocalShippingIcon />
								<h2 className='my-3 font-bold'>Order Delivery</h2>

								<div>
									<h2>Lagos, Nigeria {<ArrowForwardIcon />} abia, Nigiria</h2>
								</div>
							</div>

							{/* Delivery Day */}
							<div className='bg-blue-600 text-white p-5 rounded-lg'>
								<CalendarMonthIcon />
								<p className='my-3 font-bold'>Delivery Date</p>
								<div className='border w-1/2 px-1'>27 October 2024</div>
							</div>

							{/* Delivery Time */}
							<div className='bg-blue-900 text-white p-5 rounded-lg'>
								<AccessTimeIcon />
								<p className='my-3 font-bold'>Delivered in</p>
								<div className='border w-1/2 px-1'>Ten to twelve Days</div>
							</div>
						</section>

						{/* DELIVERY INFORMATION */}
						<div className='grid grid-cols-2 gap-5 mb-5'>
							<div className=''>
								<section className='p-7 border rounded-lg'>
									<h2 className='font-black'>Sender Information</h2>
									{/* Sender Infomation */}
									<div className='flex gap-9'>
										<p>
											<span className='font-black'>Name:</span> James Blunt
										</p>
										<p>
											<span className='font-bold'>Phone:</span> 0908796534
										</p>
									</div>
									<p>
										<span className='font-bold'>Email:</span>{' '}
										iammjohnson@gmail.com
									</p>
								</section>

								<section className='p-7 border rounded-lg mt-5'>
									<h2 className='font-black'>Recipient Information</h2>
									<div className='flex gap-9'>
										<p>
											<span className='font-bold'>Name:</span> James Blunt
										</p>
										<p>
											<span className='font-bold'>Phone:</span> 0908796534
										</p>
									</div>
									<p>
										<span className='font-bold'>Email:</span>{' '}
										iammjohnson@gmail.com
									</p>
								</section>
							</div>

							{/* SHipment Details */}
							<div className='p-5 border rounded-lg'>
								<h2 className='font-bold text-xl mb-3'>Shipment Details</h2>
								<div>
									<div className='flex justify-between mb-5'>
										<span>Number of Packages: 58</span>
										<span>is it fragile?: Yes</span>
										<span>Number of Packages:</span>
									</div>
									<p className='mb-3'>
										<span className='font-bold'>Package Weight: </span>210kg
									</p>
									<h2>
										<span className='font-bold'>Package Description:</span> A
										mysterious artifact from a parallel universe, shimmering
										with energy, possibly sent by inter dimensional beings.
										Or... socks.
									</h2>
								</div>
							</div>
						</div>

						{/* PICKUP INFO */}
						<div className='grid grid-cols-2 gap-5'>
							{/* PickupDriver */}
							<div className=' p-2 rounded-lg px-7 bg-blue-700 text-white'>
								<aside className='flex items-center justify-between '>
									<p className='font-bold'>Pick Up Driver</p>
									<Avatar className='scale-75' />
								</aside>

								{/* DRIVER DETAILS */}
								<div className='leading-9'>
									<div className='flex items-center gap-2'>
										<AccountCircleIcon />
										<p>Driver Name: James Rodri</p>
									</div>
									<div className='flex items-center gap-2'>
										<DriveEtaIcon />
										<p>Vehicle Type: Toyota Camry</p>
									</div>
									<div className='flex items-center gap-2'>
										<CallIcon />
										<p>Contact Number: 09087654322</p>
									</div>
									<div className='flex items-center gap-2'>
										<AccessTimeIcon />
										<p>Arrival Time: 15 minutes</p>
									</div>
								</div>
							</div>

							{/* Shipping Cost */}
							<div className='pt-2 rounded-lg  bg-gray-200 grid'>
								<div className='px-5'>
									<h2 className='font-bold text-2xl'>Shipping Cost</h2>
									<p className='text-xl mt-4'>Base Shipping Cost: 40.020</p>
									<p className='text-xl mt-4'>Taxes & Fees: 3,200 </p>
								</div>

								{/* TOTAL */}
								<div className='flex justify-between bg-blue-900 text-white p-2 rounded-lg items-center'>
									<p className='font-bold text-xl'>Total Cost</p>
									<p className='text-xl'>43,420</p>
								</div>
							</div>
						</div>
					</section>

					{/* CONFIRM ORDER */}
					<section className='pb-10 float-right'>
						<button className='bg-blue-600 text-white py-2 px-3 rounded-lg font-bold '>
							Confirm Order
						</button>
					</section>
				</main>
			</section>
		</>
	);
};

export default OrderDetails;
