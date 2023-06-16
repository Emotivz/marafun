import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./LeaderBoard.scss";
import userData from "../../assets/data/dummy_data_9.json";
import LeaderBoardDetails from "../../components/LeaderBoardDetails/LeaderBoardDetails";

const LeaderBoard = ({finalName}) => {
  return (
    <main>
      {/* <ProfileInfo finalName={finalName}/> */}
      <LeaderBoardDetails userData={userData}/>
      <section className="activity">
        <h1 className="activity__title">Actvity</h1>
        <h2 className="activity__name">Marathon Trivia</h2>
        <h2 className="activity__name">Marathon Trivia</h2>
      </section>
    </main>
  );
};

export default LeaderBoard;
