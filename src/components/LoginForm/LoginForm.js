import "./LoginForm.scss";

const LoginForm = ({ icon, role, info1, info2 }) => {
  return (
    <article className="login-form">
      <img src={icon} alt="" className="login-card__icon" />
      <h2 className="login-card__title">I am a {role}</h2>
      <div className="login-card__info-container">
        <p className="login-card__info">{info1}</p>
        <p className="login-card__info">{info2}</p>
      </div>
    </article>
  );
};

export default LoginForm;
