import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

interface ShipmentData {
	status: string;
	orderId: string;
	origin: string;
	destination: string;
	deliveryDate: string;
	deliverySpeed: string;
	shippingCost: number;
}

const DashboardContent: React.FC = () => {
	const [currentShipment, setCurrentShipment] = useState<ShipmentData | null>(
		null
	);
	const [scheduledPickup, setScheduledPickup] = useState<ShipmentData | null>(
		null
	);
	const [orderHistory, setOrderHistory] = useState<ShipmentData[]>([]);
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch data from backend
				const currentResponse = await axios.get('/api/current-shipment');
				const pickupResponse = await axios.get('/api/scheduled-pickup');
				const historyResponse = await axios.get('/api/order-history');

				setCurrentShipment(currentResponse.data);
				setScheduledPickup(pickupResponse.data);
				setOrderHistory(historyResponse.data);
			} catch (error) {
				console.error('Error fetching shipment data', error);
			} finally {
				// setLoading(false);
			}
		};

		// fetchData(); //! donot call or you would get an error
	}, []);

	return (
		<div className='space-y-6'>
			{/* PROFILE HEADER */}
			<ProfileHeader />
			{/* Current Shipment & Scheduled Pickup */}
			<div className='flex space-x-6'>
				<div className='w-1/2 p-4 bg-white shadow rounded'>
					<h3 className='text-lg font-medium'>Current Shipment</h3>
					{currentShipment ? (
						<div>
							<p>Order ID: {currentShipment.orderId || '12345'}</p>
							<p>Origin: {currentShipment.origin || 'lagos'}</p>
							<p>Destination: {currentShipment.destination || 'ipaja'}</p>
							<p>Delivery Date: {currentShipment.deliveryDate || '9999'}</p>
						</div>
					) : (
						<p>No current shipment</p>
					)}
				</div>

				<div className='w-1/2 p-4 bg-white shadow rounded'>
					<h3 className='text-lg font-medium'>Scheduled Pickups</h3>
					{scheduledPickup ? (
						<div>
							<p>Order ID: {scheduledPickup.orderId}</p>
							<p>Pickup Date: {scheduledPickup.deliveryDate}</p>
						</div>
					) : (
						<p>No scheduled pickups</p>
					)}
				</div>
			</div>

			{/* Order History */}
			<div>
				<h3 className='text-lg font-bold'>Order History</h3>
				{/* Filter & Download */}
				<div className='flex  gap-4 my-4'>
					<button className='px-4 py-2 bg-blue-600 text-white rounded'>
						Filter
					</button>
					<button className='px-4 py-2 bg-green-600 text-white rounded'>
						Download PDF
					</button>
				</div>
				{orderHistory.length >= 0 ? (
					<table className='min-w-full bg-white'>
						<thead>
							<tr className='border border-black'>
								<th className='border border-black'>Status</th>
								<th className='border border-black'>Order ID</th>
								<th className='border border-black'>Origin</th>
								<th className='border border-black'>Destination</th>
								<th className='border border-black'>Delivery Date</th>
								<th className='border border-black'>Shipping Cost</th>
							</tr>
						</thead>
						<tbody>
							{orderHistory.map((order) => (
								<tr key={order.orderId}>
									<td>{order.status}</td>
									<td>{order.orderId}</td>
									<td>{order.origin}</td>
									<td>{order.destination}</td>
									<td>{order.deliveryDate}</td>
									<td>${order.shippingCost}</td>
								</tr>
							))}

							{/* // ! remove after backend works fine */}
							<tr className='text-center'>
								<td className='border border-black'>success</td>
								<td className='border border-black'>1234</td>
								<td className='border border-black'>lagos</td>
								<td className='border border-black'>ibadan</td>
								<td className='border border-black'>2nd january 2024</td>
								<td className='border border-black'>$300</td>
							</tr>
						</tbody>
					</table>
				) : (
					<p className='text-gray-500'>0 Order History</p>
				)}
			</div>
		</div>
	);
};

export default DashboardContent;
