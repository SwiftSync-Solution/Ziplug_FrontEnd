import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<p>Login</p>
			<Link to='/login'>Login Link</Link>
			<br />
			<Link to='/register'>SignUp</Link>
		</div>
	);
};

export default Home;
