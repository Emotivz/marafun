import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import StudentIcon from "../assets/icons/openmoji_child.svg";
import LoginFormCode from "../components/LoginFormCode/LoginFormCode";
import "./StudentLogin.scss";

const StudentLogin = () => {
  return (
    <section className="whole-student-login-page">
      <Header />
      <div className="login-form-page-wrapper">
        <div className="student-login__title-wrapper">
          <h1 className="student-login__title">Student Login</h1>
        </div>
        <article className="component-container">
          <LoginForm
            icon={StudentIcon}
            role={"student"}
            info1={"Pick an avatar, and monitor"}
            info2={"your team’s rankings!"}
          />
          <div className="student-login__divider"></div>
          <LoginFormCode />
        </article>
      </div>
    </section>
  );
};

export default StudentLogin;
