import "./LoginCard.scss";

const LoginCard = ({ icon, role, info1, info2 }) => {
  return (
    <article className="login-card">
      <div className="login-card__icon-wrapper">
        <img src={icon} alt="" className="login-card__icon" />
      </div>
      <h2 className="login-card__title">I am a {role}</h2>
      <div className="login-card__info-container">
        <p className="login-card__info">{info1}</p>
        <p className="login-card__info">{info2}</p>
      </div>
      <p className="login-card__login-button">
        <span className="login-card__role ">{role} </span>log in
      </p>
    </article>
  );
};

export default LoginCard;
