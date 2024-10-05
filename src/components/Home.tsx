import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <p>Login</p>
        <Link to="/login">Login Link</Link>
        <br />
        <Link to="/register">SignUp</Link>
      </div>
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
