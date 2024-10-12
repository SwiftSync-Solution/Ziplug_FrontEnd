import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp/SignUp";
import DashBoard from "./pages/components/DashBoard/Dashboard";
import PlaceOrder from "./pages/components/PlaceOrder/PlaceOrder";
import TrackShipment from "./pages/components/TrackShipment/trackShipment";
import Notifications from "./pages/components/notification/notification";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/help" element={<DashBoard />} />
        <Route path="/settings" element={<DashBoard />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
