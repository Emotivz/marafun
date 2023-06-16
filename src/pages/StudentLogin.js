import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import StudentIcon from "../assets/icons/openmoji_child.svg";

const StudentLogin = () => {
  return (
    <>
      <Header />
      <h1 className="student-login__title">Student Login</h1>
      <LoginForm
        icon={StudentIcon}
        role={"student"}
        info1={"Pick an avatar, and monitor"}
        info2={"your team’s rankings!"}
      />
    </>
  );
};

export default StudentLogin;
