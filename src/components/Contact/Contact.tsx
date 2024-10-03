import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../../assets/contactImage.png';
import chatIcon from '../../assets/chatIcon.png';
import emailIcon from '../../assets/emailIcon.png';
import phoneIcon from '../../assets/phoneIcon.png';
import locationIcon from '../../assets/locationIcon.png';

const Contact: React.FC = () => {
	return (
		<>
			<section className='mx-14 p-7 text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex gap-16 font-open-sans rounded-xl relative'>
				{/* NOTE Image conatainer */}
				<div className='self-end'>
					<img src={contactImage} alt='contact image' />
					{/* NOTE chat icon */}
					<div className='flex items-center gap-2'>
						<img src={chatIcon} alt='chat icon' />
						<Link to='' className='underline'>
							Live Chat
						</Link>
					</div>
				</div>

				{/* NOTE Text container */}
				<article className='w-[55%]'>
					<div className=''>
						<p className='font-normal mb-2'>
							Reach out to us for any inquiries, feedback, or support needs.
						</p>
						<p className='font-light'>
							Need assistance? Our dedicated customer support team is here to
							help you with any questions or concerns.
						</p>
					</div>

					{/* NOTE CONTACT Form */}

					<form className='mt-10'>
						<div className='grid grid-cols-2 gap-7'>
							<input
								className='bg-transparent border  border-white text-white p-2 rounded-md '
								type='text'
								placeholder='Fullname'
							/>
							<input
								className='bg-transparent border  border-white text-white p-2 rounded-md '
								type='email'
								placeholder='Email Address'
							/>
							<input
								className='bg-transparent border  border-white text-white p-2 rounded-md '
								type='number'
								placeholder='Contact Number'
							/>
							<input
								className='bg-transparent border  border-white text-white p-2 rounded-md '
								type='text'
								placeholder='Subject'
							/>
						</div>
						<button className='mt-10 bg-white text-black font-bold rounded-md p-2'>
							Contact us
						</button>
					</form>

					{/* NOTE Help comtent */}
					<div className='mt-10 '>
						<p className='font-bold mb-5'>We're here to help!</p>

						<article className='grid grid-cols-2 gap-5 width'>
							{/* NOTE Phone */}
							<div className='flex items-center gap-3'>
								<img src={phoneIcon} alt='Phone icon' />
								<p>Phone: +1-800-123-4567</p>
							</div>

							{/* NOTE Address */}
							<div className='flex items-center gap-3'>
								<img src={locationIcon} alt='email Icon' />
								<p>
									Address: 123 Logistics Lane, Suite 200, Shipping City, ST
									45678
								</p>
							</div>

							{/* NOTE Email */}

							<div className='flex items-center gap-2'>
								<img src={emailIcon} alt='address icon' />
								<p>Email: support@ziplogistics.com</p>
							</div>
						</article>
					</div>
				</article>

				{/* NOTE GET IN TOUCH */}
				<article className='absolute top-0 left-0 -ml-2 -mt-1 p-2 bg-white text-blue-700 text-6xl rounded-lg font-orbitron font-bold'>
					<p>Get In Touch</p>
				</article>
			</section>
			;
		</>
	);
};

export default Contact;
