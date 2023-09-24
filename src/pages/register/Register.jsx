import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
          <br/>
          <span>Do you have an account?<Link to="/login">
          <button>Login</button>
          </Link></span>
        </div>
      </div>
  );
};

export default Register;
