import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';

function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
