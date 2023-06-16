import Header from "../components/Header/Header";
import LoginCard from "../components/LoginCard/LoginCard";
import StudentIcon from "../assets/icons/openmoji_child.svg";

const Login = () => {
  return (
    <>
      <Header />
      <h1 className="login__title">Login</h1>
      <LoginCard
        icon={StudentIcon}
        role={"student"}
        info1={"Pick an avatar, and monitor"}
        info2={"your team’s rankings!"}
      />
      <LoginCard />
    </>
  );
};

export default Login;
