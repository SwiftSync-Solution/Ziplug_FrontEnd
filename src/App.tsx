import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
