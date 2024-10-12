import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/loginImage.png';
import googleSvg from '../../assets/google.svg';

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

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	// Handles the changes in the form data
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handles the form submission and sends a POST request
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null); // Reset any previous error message

		// Basic validation
		if (!formData.email || !formData.password) {
			setError('Please fill in both email and password.');
			return;
		}

		setLoading(true); // Set loading to true

		try {
			const token = await axios.post(
				'https://ziplogistics.pythonanywhere.com/api/token',
				formData
			);

			console.log('auth', token);

			const userToken = await axios.post(
				'https://ziplogistics.pythonanywhere.com/login-user',
				formData,
				{
					headers: {
						Authorization: `Bearer ${token.data.access}`,
					},
				}
			);

			console.log(userToken.data.user_type);
			navigate('/dashboard');
		} catch (err) {
			// Handle error during login
			setError('Login failed. Please check your credentials and try again.');
			console.error('Error during login:', err);
		} finally {
			setLoading(false); // Set loading to false after request
		}
	};

	return (
		<section className='p-5 flex justify-center h-screen gap-32 font-open-sans'>
			<aside className='w-96'>
				<h2 className='mb-8 text-xl'>Welcome Back!</h2>

				<p className='mb-8 text-xl font-bold'>
					Manage your shipments, track deliveries, and access all your logistics
					needs in one place.
				</p>

				<button className='mb-5 w-full rounded p-1 border border-grey-900'>
					<div className='flex gap-3 justify-center'>
						<img className='w-4' src={googleSvg} alt='google svg' />
						<p>Log in with Google</p>
					</div>
				</button>

				<div className='text-center mb-5 flex justify-center items-center gap-3'>
					<div className='w-12 border-b-2'></div>
					<p>Or</p>
					<div className='w-12 border-b-2'></div>
				</div>

				{error && <p className='text-red-600'>{error}</p>}

				<form className='mb-8' onSubmit={handleSubmit}>
					<input
						className='mb-4 p-2 w-full border border-grey-900 rounded'
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Email address'
					/>
					<input
						className='mb-4 p-2 w-full border border-grey-900 rounded'
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						placeholder='Password'
					/>
					<Link to='' className='text-blue-600'>
						Forget Password?
					</Link>
					<div className='flex justify-center mt-8'>
						<button
							className='w-1/2 rounded p-1 bg-blue-700 text-white font-bold'
							type='submit'
							disabled={loading}>
							{loading ? 'Logging in...' : 'Login'}
						</button>
					</div>
				</form>

				<span>
					Don&apos;t Have An Account?{' '}
					<Link to='/register' className='text-blue-600 font-bold'>
						Sign Up
					</Link>
				</span>
			</aside>

			<aside className='relative'>
				<img className='h-full' src={loginImage} alt='Login Image' />
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
	);
};

export default Login;
