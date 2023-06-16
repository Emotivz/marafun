import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import StudentGoals from "../../components/StudentGoals/StudentGoals";
import "./Profile.scss";
import data from "../../assets/data/dummy_data_9.json";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { studentId } = useParams();
  const student = data.find((s) => s.Unique_ID === Number(studentId));

  return (
    <>
      <section className="main">
        <ProfileInfo student={student} />
        <StudentGoals />
      </section>
    </>
  );
}
