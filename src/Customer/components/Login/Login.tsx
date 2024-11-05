import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../../assets/loginImage.png';
import googleSvg from '../../../assets/google.svg';
import axios from 'axios';
import auth from '../../../../helper/authenticate';
interface FormData {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	// Handles the changes in the form data
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setError('');
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value, // Update the state for the corresponding input
		});
	};

	// Handles the form submission
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent the form from reloading the page

		if (!formData.email) {
			setError('Enter Valid data in Email');
			return;
		}
		if (!formData.password) {
			setError('Enter Valid data in Password');
			return;
		}

		console.log('Form submitted with:', formData);

		// setFormData({ email: '', password: '' });

		try {
			const token = await axios.post(
				'https://ziplogistics.pythonanywhere.com/api/token',
				formData
			);
			if (token.status === 401) {
				setError('Wrong Password or Email');
				return;
			}
			// LOGIN
			const response = await axios.post(
				'https://ziplogistics.pythonanywhere.com/api/login-user',
				formData,
				{
					headers: {
						Authorization: `Bearer ${token.data.access}`,
					},
				}
			);

			if (response.status === 200) {
				auth.storeTokens(
					response.data['access-token'],
					response.data['refresh_token'],
					response.data['user_id']
				);

				navigate('/dashboard');
			}

			console.log(response);
		} catch (err: unknown) {
			if (axios.isAxiosError(err) && err.response?.status === 401) {
				setError('Wrong Password or Email');
			} else {
				console.error('An unexpected error occurred:', err);
			}
		}

		// Here you could send the data to a server
	};

	return (
		<>
			<section className='p-5 flex justify-center h-screen gap-32 font-open-sans'>
				{/* Login form section */}
				<aside className='w-96'>
					<h2 className='mb-8 text-xl'>Welcome Back!</h2>

					<p className='mb-8 text-xl font-bold'>
						Manage your shipments, track deliveries, and access all your
						logistics needs in one place.
					</p>

					{error && (
						<p className='error-message mb-4 font-bold text-red-700'>{error}</p>
					)}

					{/* Oauth login */}
					<button className='mb-5 w-full rounded p-1 border border-grey-900'>
						<div className='flex gap-3 justify-center'>
							<img className='w-4' src={googleSvg} alt='google svg' />
							<p>Log in with Google</p>
						</div>
					</button>

					{/* Separator */}
					<div className='text-center mb-5 flex justify-center items-center gap-3'>
						<div className='w-12 border-b-2'></div>
						<p>Or</p>
						<div className='w-12 border-b-2'></div>
					</div>

					{/* Login form */}
					<form className='mb-8' onSubmit={handleSubmit}>
						<input
							className='mb-4 p-2 w-full border border-grey-900 rounded'
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Email address'
						/>
						<br />
						<input
							className='mb-4 p-2 w-full border border-grey-900 rounded'
							type='password'
							name='password'
							onChange={handleChange}
							value={formData.password}
							placeholder='Password'
						/>
						<br />

						{/* Link to forgotten password */}
						<Link to='/reset' className='text-blue-600'>
							Forget Password?
						</Link>
						<br />
						<div className='flex justify-center mt-8'>
							<button className='w-1/2 rounded p-1 bg-blue-700 text-white font-bold'>
								Login
							</button>
						</div>
					</form>

					<span>
						Don&apos;t Have An Account?{' '}
						<Link to='/sign-up' className='text-blue-600 font-bold'>
							Sign Up
						</Link>
					</span>
				</aside>

				{/* Login side image */}
				<aside className='relative'>
					<img className='h-full' src={loginImage} alt='Login Image' />
					{/* Grid image */}
					<div className='absolute top-0 w-full items-center place-items-center text-white grid grid-cols-3 h-full gap-2'>
						<article className='w-full h-full rounded-lg outline outline-8 '></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
						<article className='w-full h-full rounded-lg outline outline-8'></article>
					</div>
				</aside>
			</section>
		</>
	);
};

export default Login;
