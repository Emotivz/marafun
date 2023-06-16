import "./Header.scss";
import logo from "../../assets/logos/tcslms.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
    </section>
  );
};

export default Header;
