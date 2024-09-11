import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
