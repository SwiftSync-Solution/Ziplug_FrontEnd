import { useState, ChangeEvent, FC, FormEvent } from 'react';
import SideBar from '../sideNav/SideBar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Define TypeScript interfaces for the form data
interface FormData {
	customer_full_name: string;
	customer_phone_number: string;
	customer_email: string;
	pickup_address_state: string;
	pickup_address_city: string;
	pickup_address_postal_code: string;
	pickup_address_country: string;
}

const PlaceOrder: FC = () => {
	return (
		<>
			<section className='flex'>
				{/* SIDEBAR */}
				<SideBar />

				{/* Main Content */}
				<main className='w-full px-8 py-5'>
					<ProfileHeader
						content={
							<div className='flex gap-2 items-center text-2xl font-bold'>
								<LocalShippingIcon />
								Place Order
							</div>
						}
					/>

					{/* SENDER INFORMATION */}
					<SenderAndRecipient />
				</main>
			</section>
		</>
	);
};

const SenderAndRecipient: FC = () => {
	const navigate = useNavigate();
	// State for sender information
	const [sender, setSender] = useState<FormData>({
		customer_full_name: '',
		customer_phone_number: '',
		customer_email: '',
		pickup_address_state: '',
		pickup_address_city: '',
		pickup_address_postal_code: '',
		pickup_address_country: '',
	});

	// State for recipient information
	const [recipient, setRecipient] = useState({
		recipient_full_name: '',
		recipient_phone_number: '',
		recipient_email: '',
		delivery_state: '',
		delivery_city: '',
		delivery_postal_code: '',
		delivery_country: '',
	});

	// State to track API response or form submission status
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	// Handle sender input change
	const handleSenderChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		console.log(name, value);

		setSender((prev) => ({ ...prev, [name]: value }));
	};

	// Handle recipient input change
	const handleRecipientChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setRecipient((prev) => ({ ...prev, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault(); // Prevent page refresh
		setLoading(true);
		setError(null);
		setSuccess(null);

		// Combine sender and recipient data into one object
		const formData = {
			...sender,
			...recipient,
		};

		const token = localStorage.getItem('accessToken');
		const userId = localStorage.getItem('user_id');
		const URL = `https://ziplogistics.pythonanywhere.com/api/create-customer-order/${userId}`;
		// SEND FORM HERE
		try {
			const response = await axios.post(URL, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 201) {
				setLoading(false);
				setSuccess('Order successFull');
				navigate('/shipment-details');
			}
		} catch (err: unknown) {
			setLoading(false);
			if (axios.isAxiosError(err) && err.response?.status === 400) {
				setError('An error occurred. Please check your data and try again.');
			} else {
				console.error('An unexpected error occurred:', err);
			}
		}
	};

	return (
		<>
			<section className='mt-2'>
				{/* Display loading, error or success messages */}
				{loading && (
					<p className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-green-500 rounded-md text-white font-bold'>
						Sending order...
					</p>
				)}
				{error && (
					<p className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-red-500 rounded-md text-white font-bold'>
						{error}
					</p>
				)}
				{success && (
					<p className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-green-500 rounded-md text-white font-bold'>
						{success}
					</p>
				)}

				<form onSubmit={handleSubmit}>
					<header className='font-black text-xl'>
						<h1>Sender information</h1>
					</header>
					<section className='flex gap-10'>
						{/* GRID ONE */}
						<div>
							<h2 className='font-bold'>Personal Details</h2>
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='customer_full_name'
								placeholder='Full Name'
								value={sender.customer_full_name}
								onChange={handleSenderChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='number'
								name='customer_phone_number'
								placeholder='Phone Number'
								value={sender.customer_phone_number}
								onChange={handleSenderChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='email'
								name='customer_email'
								placeholder='Email address'
								value={sender.customer_email}
								onChange={handleSenderChange}
							/>
						</div>

						{/* GRID TWO */}
						<div>
							<h2 className='font-bold'>Personal Details</h2>
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='pickup_address_state'
								placeholder='State'
								value={sender.pickup_address_state}
								onChange={handleSenderChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='pickup_address_city'
								placeholder='City'
								value={sender.pickup_address_city}
								onChange={handleSenderChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='number'
								name='pickup_address_postal_code'
								placeholder='Postal Code'
								value={sender.pickup_address_postal_code}
								onChange={handleSenderChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='pickup_address_country'
								placeholder='Country'
								value={sender.pickup_address_country}
								onChange={handleSenderChange}
							/>
						</div>
					</section>

					{/* RECIPIENT INFORMATION */}
					<header className='font-black text-xl mt-7'>
						<h1>Recipient information</h1>
					</header>
					<section className='flex gap-10'>
						{/* GRID ONE */}
						<div>
							<h2 className='font-bold'>Recipient Details</h2>
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='recipient_full_name'
								placeholder='Full Name'
								value={recipient.recipient_full_name}
								onChange={handleRecipientChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='number'
								name='recipient_phone_number'
								placeholder='Phone Number'
								value={recipient.recipient_phone_number}
								onChange={handleRecipientChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='email'
								name='recipient_email'
								placeholder='Email address'
								value={recipient.recipient_email}
								onChange={handleRecipientChange}
							/>
						</div>

						{/* GRID TWO */}
						<div>
							<h2 className='font-bold'>Delivery Address</h2>
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='delivery_state'
								placeholder='State'
								value={recipient.delivery_state}
								onChange={handleRecipientChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='delivery_city'
								placeholder='City'
								value={recipient.delivery_city}
								onChange={handleRecipientChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='number'
								name='delivery_postal_code'
								placeholder='Postal Code'
								value={recipient.delivery_postal_code}
								onChange={handleRecipientChange}
							/>
							<br />
							<input
								className='border mt-4 rounded w-80 p-1'
								type='text'
								name='delivery_country'
								placeholder='Country'
								value={recipient.delivery_country}
								onChange={handleRecipientChange}
							/>
						</div>
					</section>

					<Button
						type='submit'
						className='!bg-[#0a1172] !text-white hover:!bg-[#1e3a8a]'
						endIcon={<SendIcon />}>
						Send
					</Button>
				</form>
			</section>
		</>
	);
};

export default PlaceOrder;
