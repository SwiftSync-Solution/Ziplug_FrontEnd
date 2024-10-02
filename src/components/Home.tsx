import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Login</p>
      <br />
      <Link to="/login">Login Link</Link>
      <br />
      <Link to="/register">SignUp</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
