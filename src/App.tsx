import "./App.css";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp/SignUp";
// import DashboardLayout from "./components/dashboardLayout/dashboardLayout";
// import DashboardPage from "./pages/dashboardPage/DashboardPage";

function App() {
  // const [user] = useState<typeof user | null>(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route
          path="/dashboard"
          element={
            <DashboardLayout user={user}>
              <DashboardPage />
            </DashboardLayout>
          }
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
