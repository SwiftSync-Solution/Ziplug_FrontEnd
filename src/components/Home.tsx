import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<p>Login</p>
			<Link to='/login'>Login Link</Link>
		</div>
	);
};

export default Home;
