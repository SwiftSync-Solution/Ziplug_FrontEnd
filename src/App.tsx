import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';
import DashBoard from './pages/components/DashBoard/Dashboard';
import PlaceOrder from './pages/components/PlaceOrder/PlaceOrder';
import TrackShipment from './pages/components/TrackShipment/trackShipment';
import ResetPassword from './pages/components/Reset/ResetPassword';
import NewPassword from './pages/components/Reset/Passwords';
import Payment from './pages/components/pay/Payment';
import DriverSignUpPage from './components/driver/DriverSignUp';
import ShipmentDetails from './pages/components/PlaceOrder/ShipmentDetails';
import PaymentSuccess from './pages/components/PaymentSuccess/PaymentSuccess';
import OrderDetails from './pages/components/OrderDetails/OrderDetails';
import Help from './pages/components/Help/Help';
import Settings from './pages/components/SettingsComp/Settings';
import Notifications from './pages/components/Notification/Notification';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
				{/* <Route path="dash" element={<DashboardContent />} /> */}
				<Route path='/dashboard' element={<DashBoard />} />

				<Route path='/driver' element={<DriverSignUpPage />} />
				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path='/shipment-details' element={<ShipmentDetails />} />
				<Route path='/track-shipment' element={<TrackShipment />} />
				<Route path='/help' element={<Help />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/notification' element={<Notifications />} />
				<Route path='/reset' element={<ResetPassword />} />
				<Route path='/new-password' element={<NewPassword />} />
				<Route path='/payment' element={<Payment email='' amount={32000} />} />
				<Route
					path='/paymentSuccess'
					element={<PaymentSuccess orderNumber={'w8dbwibbeid'} />}
				/>

				<Route path='*' element={<ErrorPage />} />

				<Route
					path='/order-details'
					element={
						<OrderDetails
							content={{
								orderId: 'RVC11234876',
								orderDate: 'September 15, 2024',
							}}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
