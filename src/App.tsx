import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/DriverSignUp';
import DashBoard from './pages/components/DashBoard/Dashboard';
import PlaceOrder from './pages/components/PlaceOrder/PlaceOrder';
import TrackShipment from './pages/components/TrackShipment/trackShipment';
import Notifications from './pages/components/notification/notification';
import ResetPassword from './pages/components/Reset/ResetPassword';
import NewPassword from './pages/components/Reset/Passwords';
import Payment from './pages/components/pay/Payment';
import DriverSignUpPage from './components/SignUp/DriverSignUp';
import ShipmentDetails from './pages/components/PlaceOrder/ShipmentDetails';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
				<Route path='/dashboard' element={<DashBoard />} />

				<Route path='/driver' element={<DriverSignUpPage />} />

				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path='/shipment-details' element={<ShipmentDetails />} />
				<Route path='/track-shipment' element={<TrackShipment />} />
				<Route path='/help' element={<DashBoard />} />
				<Route path='/settings' element={<DashBoard />} />
				<Route path='/notification' element={<Notifications />} />

				<Route path='/reset' element={<ResetPassword />} />
				<Route path='/new-password' element={<NewPassword />} />

				<Route path='/payment' element={<Payment email='' amount={32000} />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
