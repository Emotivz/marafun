import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import StudentGoals from "../../components/StudentGoals/StudentGoals";
import "./Profile.scss";

export default function Profile() {
  return (
    <>
      <section className="main">
        <ProfileInfo />
        <StudentGoals />
      </section>
    </>
  );
}
