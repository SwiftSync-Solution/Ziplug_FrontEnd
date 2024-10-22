import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	return (
		<div className='px-14 '>
			{/*// ! Would be replaced by header component or might just leave it this way*/}
			<div className='flex gap-5 ml-36 font-bold'>
				<Link to='/'>Drive</Link>
				<Link to='/'>Services</Link>
				<Link to='/'>Customer Service</Link>
				<Link to='/'>Track Shipment</Link>
			</div>
			<h2 className='text-7xl text-blue-800 font-black font-orbitron'>
				ZIP LOGISTICS
			</h2>
		</div>
	);
};

export default Footer;
