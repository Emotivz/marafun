import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./LeaderBoard.scss";
import userData from "../../assets/data/dummy_data_9.json";
import LeaderBoardDetails from "../../components/LeaderBoardDetails/LeaderBoardDetails";
import { Link, useParams } from "react-router-dom";

const LeaderBoard = ({ finalName }) => {
  const { studentId } = useParams();
  console.log(studentId);
  const student = userData.find((s) => s.Unique_ID === Number(studentId));

  return (
    <main>
      <ProfileInfo finalName={finalName} student={student} />
      <LeaderBoardDetails userData={userData} />
      <section className="activity">
        <Link to={`/profile/${studentId}`}>
          <h1 className="activity__title">Actvity</h1>{" "}
        </Link>
        <h2 className="activity__name">Marathon Trivia</h2>
        <h2 className="activity__name">Marathon Trivia</h2>
      </section>
    </main>
  );
};

export default LeaderBoard;
