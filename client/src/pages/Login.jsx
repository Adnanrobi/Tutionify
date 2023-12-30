import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Login = () => {
  return (
    <Wrapper>
      <div className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="email" defaultValue="adnanrobi@gmail.com" />
        <FormRow type="password" name="password" defaultValue="test123" />
        <button className="btn btn-block">Login</button>
        <button className="btn btn-block">Explore The App</button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register here
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};
export default Login;
