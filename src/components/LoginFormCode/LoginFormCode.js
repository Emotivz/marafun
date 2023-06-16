import "./LoginFormCode.scss";
import { useNavigate } from "react-router-dom";

const LoginFormCode = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/chooseavatar");
  };

  return (
    <section className="login-form-code">
      <form className="login-form-code__form">
        <div className="login-form-code__input-container">
          <label className="login-form-code__label" htmlFor="code">
            Enter code
          </label>
          <input
            type="text"
            name="code"
            placeholder="0000"
            className="login-form-code__input"
          />
        </div>
        <button onClick={handleClick}>Enter</button>
      </form>
    </section>
  );
};

export default LoginFormCode;
