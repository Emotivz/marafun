import "./Header.scss";
import logo from "../../assets/logos/tcslms.svg";

const Header = () => {
  return (
    <section className="header__container">
      <img src={logo} alt="logo" className="header__logo" />
    </section>
  );
};

export default Header;
