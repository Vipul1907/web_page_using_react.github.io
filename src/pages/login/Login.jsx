
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {

  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/">
            <button>Login</button>
            </Link>
          </form>
          <br/>
          <br/>
          <span>Don't you have an account?
             <Link to="/register">
            <button>Register</button>
            </Link></span>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
