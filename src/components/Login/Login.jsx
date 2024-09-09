import { Link } from 'react-router-dom';
import loginImage from '../../assets/loginImage.png';
import { useState } from 'react';
import googleSvg from '../../assets/google.svg';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// NOTE handles the changes in the form data
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value, // ! Update the state for the corresponding input
		});
	};

	// NOTE  Handles the form submission
	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the form from reloading the page
		console.log('Form submitted with name:', e);
		setFormData({ email: '', password: '' });
		// Here you could send the data to a server
	};

	return (
		<>
			<section className='p-5 flex justify-center h-screen gap-32 font-open-sans'>
				{/* NOTE Login form section */}
				<aside className='w-96'>
					<h2 className='mb-8 text-xl'>Welcome Back!</h2>

					<p className='mb-8 text-xl font-bold'>
						Manage your shipments, track deliveries, and access all your
						logistics needs in one place.
					</p>

					{/* NOTE Oauth login */}
					<button className='mb-5 w-full rounded p-1 border border-grey-900'>
						<div className='flex gap-3 justify-center'>
							<img className='w-4' src={googleSvg} alt='google svg' />
							<p>Log in with Google</p>
						</div>
					</button>

					{/* //! seperator  */}
					<div className='text-center mb-5 flex justify-center items-center gap-3'>
						<div className='w-12 border-b-2'></div>
						<p>Or</p>
						<div className='w-12 border-b-2'></div>
					</div>

					{/* NOTE LOGIN FORM */}
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

						{/* NOTE Link to forgotten password */}
						<Link to='' className='text-blue-600'>
							Forget Password ?
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
						<Link to='' className='text-blue-600 font-bold'>
							Sign Up
						</Link>
					</span>
				</aside>

				{/* NOTE Login side image */}
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
