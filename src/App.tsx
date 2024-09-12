import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
