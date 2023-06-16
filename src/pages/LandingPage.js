import Header from "../components/Header/Header";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";
import landingLogo from "../assets/icons/landing-image.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <section className="landing-page">
        <div className="landing-page__content-container">
          <h2 className="landing-page__title">
            Run, Play and Conquer: Marathon Kids, Are you Ready?{" "}
          </h2>
          <button
            className="login-form-code__button-landing"
            onClick={handleButtonClick}
          >
            Get Involved!
          </button>
        </div>
        <div className="landing-page__content-container-img">
          <img
            src={landingLogo}
            alt="marafun logos"
            className="lading-page__image"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Login;
