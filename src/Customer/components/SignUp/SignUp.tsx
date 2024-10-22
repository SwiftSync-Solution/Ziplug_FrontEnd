// Let's build a very demure signup page

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import googleSvg from '../../../assets/google.svg';
import SignUpImage from '../../../assets/SignUpImage.png';

// Define the shape of the form data
interface SignupFormData {
	email: string;
	password: string;
	confirmPassword: string;
}

const SignUpPage: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<SignupFormData>();

	const [loading, setLoading] = useState(false);
	// Track loading state for form submission
	const [errorMessage, setErrorMessage] = useState('');
	// Display error messages from API
	const [successMessage, setSuccessMessage] = useState('');
	// Display success message on signup

	const password = watch('password');

	// Google Login success handler
	const handleGoogleLoginSuccess = async (tokenResponse: any) => {
		try {
			const accessToken = tokenResponse.access_token;

			// Send the access token to your server for verification/authentication
			const response = await axios.post('/api/google-auth', {
				token: accessToken,
			});

			// Handle success (e.g., store JWT, navigate user to dashboard)
			console.log('Google OAuth Success:', response.data);
			setSuccessMessage("Google login successful! You're now logged in.");
		} catch (error) {
			console.error('Google OAuth Error:', error);
			setErrorMessage('Failed to sign in with Google. Please try again.');
		}
	};

	// Google Login error handler
	const handleGoogleLoginError = (error: any) => {
		console.error('Google OAuth Error:', error);
		setErrorMessage('Google login failed. Please try again.');
	};

	// Set up the Google login hook
	const loginWithGoogle = useGoogleLogin({
		onSuccess: handleGoogleLoginSuccess,
		onError: handleGoogleLoginError,
	});

	// Function to handle form submission and send data to API
	const navigate = useNavigate();
	const onSubmit = async (data: SignupFormData) => {
		setLoading(true);
		setErrorMessage('');
		setSuccessMessage('');
		// /api/create-user/*{placeholder}*

		// add "const response to save the user input"
		try {
			await axios.post(
				'https://ziplogistics.pythonanywhere.com/api/create-user/customer',
				{
					email: data.email,
					password: data.password,
				}
			);

			// On successful sign-up
			setSuccessMessage('Account created successfully!');
			navigate('/dashboard');
		} catch (error: unknown) {
			// Handle errors from API
			if (axios.isAxiosError(error) && error.response && error.response.data) {
				setErrorMessage(error.response.data.message);
			} else {
				setErrorMessage('An unexpected error occurred. Please try again.');
			}
		} finally {
			setLoading(false);
		}
	};

	// Function to validate password
	const validatePassword = (value: string) => {
		const passwordRegex =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
		return (
			passwordRegex.test(value) ||
			'Password must be at least 8 characters long and include letters, numbers, and special characters.'
		);
	};

	return (
		<section className='p-5 ml-0 mr-0 flex justify-center h-screen gap-32 font-open-sans'>
			<aside className='w-96'>
				{/* Heading for the sign-up form */}

				<h2 className='text-2xl text-b-700 text-left mt-4 mb-5'>
					Join Zip Logistics Today!
				</h2>
				<p className='mb-8 text-xl leading-9 font-semibold'>
					Experience seamless, fast, and reliable shipping with an account
					tailored to your logistics needs
				</p>

				{/* Display error or success messages */}

				{errorMessage && (
					<p className='error-message mb-4 text-red-500'>{errorMessage}</p>
				)}
				{successMessage && <p className='success-message'>{successMessage}</p>}

				{/* Form starts here */}

				<form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
					{/* Google sign-up button */}

					<button
						type='button'
						onClick={() => loginWithGoogle}
						className='mb-4 p-2 w-full border border-b-900 rounded flex justify-center items-center shadow-sm hover:bg-gray-50'>
						<img className='w-5 h-5 mr-2' src={googleSvg} alt='Google logo' />
						Sign up with Google
					</button>

					{/* Separator between Google login and manual registration */}

					<div className='my-4 flex justify-center items-center'>
						<hr className='w-1/5 border-gray-300 justify-center' />
						<span className='px-4 text-gray-500'>or</span>
						<hr className='w-1/5 border-gray-300 justify-center' />
					</div>

					{/* Email input field */}

					<input
						type='email'
						placeholder='Email Address'
						className={`block w-full p-2 border ${
							errors.email ? 'border-red-500' : 'border-gray-300'
						} rounded focus:ring-2 focus:ring-blue-400 mb-4`}
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Invalid email address',
							},
						})}
					/>
					{errors.email && <p className='error-text'>{errors.email.message}</p>}

					{/* Password input field */}

					<input
						type='password'
						placeholder='Password'
						className={`block w-full p-2 border ${
							errors.password ? 'border-red-500' : 'border-gray-300'
						} rounded focus:ring-2 focus:ring-blue-400 mb-4`}
						{...register('password', {
							required: 'Password is required',
							validate: validatePassword,
						})}
					/>
					{errors.password && (
						<p className='error-text'>{errors.password.message}</p>
					)}

					{/* Confirm password input field */}

					<input
						type='password'
						placeholder='Confirm Password'
						className={`block w-full p-2 border ${
							errors.confirmPassword ? 'border-red-500' : 'border-gray-300 mb-4'
						} rounded focus:ring-2 focus:ring-blue-400`}
						{...register('confirmPassword', {
							required: 'Please confirm your password',
							validate: (value) =>
								value === password || 'Passwords do not match',
						})}
					/>
					{errors.confirmPassword && (
						<p className='error-text'>{errors.confirmPassword.message}</p>
					)}

					{/* Submit button */}

					<div className='flex justify-center mt-8'>
						<button
							type='submit'
							className='w-1/2 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300 mb-4'
							disabled={loading}>
							{loading ? 'Signing Up...' : 'Sign Up'}
						</button>
					</div>
				</form>

				{/* Link to log in */}

				<p className='mt-4 text-center text-gray-600'>
					Already have an account?{' '}
					<Link to='/login' className='text-blue-500 font-bold hover:underline'>
						Log In
					</Link>
				</p>
			</aside>

			{/* Side image */}

			<aside className='relative'>
				<img className='h-full' src={SignUpImage} alt='SignUp' />
				<div className='absolute top-0 w-full items-center place-items-center text-white grid grid-cols-3 h-full gap-2'>
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
					<article className='w-full h-full rounded-lg outline outline-8'></article>
				</div>
			</aside>
		</section>
	);
};

export default SignUpPage;
