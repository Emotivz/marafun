import Header from "../components/Header/Header";
import LoginCard from "../components/LoginCard/LoginCard";
import StudentIcon from "../assets/icons/openmoji_child.svg";
import TeacherIcon from "../assets/icons/noto_teacher.svg";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page__whole">
      <Header />
      <h1 className="login__title">Log in</h1>
      <section className="login-page">
        <div className="login-container__card-container">
          <LoginCard
            icon={StudentIcon}
            role={"student"}
            info1={"Pick an avatar, and monitor"}
            info2={"your team’s rankings!"}
          />{" "}
          <div className="card-divider"></div>
          <LoginCard
            icon={TeacherIcon}
            role={"teacher"}
            info1={"Monitor your students and"}
            info2={"keep an eye on activities"}
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
