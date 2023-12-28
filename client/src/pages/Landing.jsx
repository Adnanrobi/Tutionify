import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Tution <span>Tracking </span>App
          </h1>
          <p>
            These examples are programmatically compiled from various online
            sources to illustrate current usage of the word Any opinions
            expressed in the examples do not represent those of Merriam-Webster
            or its editors. Send us feedback about these examples.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
