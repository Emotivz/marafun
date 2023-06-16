import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./LeaderBoard.scss";

const LeaderBoard = () => {
  return (
    <main>
      <ProfileInfo />
      <section className="activity">
        <h1 className="activity__title">Actvity</h1>
        <h2 className="activity__name">Marathon Trivia</h2>
        <h2 className="activity__name">Marathon Trivia</h2>
      </section>
    </main>
  );
};

export default LeaderBoard;
