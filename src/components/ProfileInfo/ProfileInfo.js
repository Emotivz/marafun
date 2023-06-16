import "./ProfileInfo.scss";
import avatarURL from "../../assets/logos/Ellipse 12.png";
import teamAvatarURL from "../../assets/logos/Ellipse 16.png";
import scoreURL from "../../assets/logos/Ellipse 17.png";

export default function ProfileInfo({ student }) {
  console.log(student);
  // data.find((student) => student.Unique_ID[])
  return (
    <>
      <section className="profile">
        <section className="profile-info">
          <h1 className="profile-info__title">Profile</h1>
          <div className="container">
            <img className="profile-info__avatar" src={avatarURL} alt="" />
            <h2 className="profile-info__avatar-text"> Fuzzy flame</h2>
          </div>

          <div className="container">
            <img
              className="profile-info__team-avatar"
              src={teamAvatarURL}
              alt=""
            />
            <p className="profile-info__team-avatar-text">
              You're on the <b>{student.Team}</b>
            </p>
          </div>

          <div className="container">
            <img className="profile-info__score-icon" src={scoreURL} alt="" />
            <p className="profile-info__score-icon-text">
              Your score is <b>{student.Accumulative_Points}</b>
            </p>
          </div>
        </section>

        <button className="log-out-button">Log out</button>
      </section>
    </>
  );
}
