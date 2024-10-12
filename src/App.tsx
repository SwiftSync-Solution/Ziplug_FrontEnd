import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';
import DashBoard from './pages/components/DashBoard/Dashboard';
import PlaceOrder from './pages/components/PlaceOrder/PlaceOrder';
import TrackShipment from './pages/components/TrackShipment/trackShipment';
import Help from './pages/components/Help/Help';
import Settings from './pages/components/SettingsComp/Settings';
import ResetPassword from './pages/components/ResetPassword/ResetPassword';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
				<Route path='/dashboard' element={<DashBoard />} />
				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path='/track-shipment' element={<TrackShipment />} />
				<Route path='/help' element={<Help />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/resetPassword' element={<ResetPassword />} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
