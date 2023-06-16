import iconURL from "../../assets/icons/koala-cartoon-fox-avatar-png-favpng-v7ir0MbUDz8DRDmVVX4Zz1EEU.jpg";
import "./ProfileInfo.scss";

export default function ProfileInfo() {
  return (
    <>
      <section className="profile">
        <section className="profile-info">
          <h1>Profile</h1>
          <div className="container">
            <img className="profile-info__avatar" src={iconURL} alt="" />
            <h2 className="profile-info__avatar-text"> Fuzzy flame</h2>
          </div>

          <div className="container">
            <img className="profile-info__team-avatar" src={iconURL} alt="" />
            <p className="profile-info__team-avatar-text">
              You're on the <b>Crocodile Team</b>
            </p>
          </div>

          <div className="container">
            <img className="profile-info__score-icon" src={iconURL} alt="" />
            <p className="profile-info__score-icon-text">
              Your score is <b>113</b>
            </p>
          </div>
        </section>

        <button>Log out</button>
      </section>
    </>
  );
}
