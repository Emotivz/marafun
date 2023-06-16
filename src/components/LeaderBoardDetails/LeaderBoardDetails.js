import { render } from "@testing-library/react";
import "./LeaderBoardDetails.scss";
import React from "react";
import { BarChart, Bar } from "recharts";
import Avatar9 from "../../assets/logos/Ellipse 9.png";

const LeaderBoardDetails = ({ userData }) => {
  const sortedData = JSON.parse(JSON.stringify(userData));

  sortedData.sort((a, b) => b.Accumulative_Points - a.Accumulative_Points);
  console.log(sortedData);
  const showData = [
    sortedData.slice(0, 3)[1],
    sortedData.slice(0, 3)[0],
    sortedData.slice(0, 3)[2],
  ];

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    console.log(value);
    console.log(showData);
    return <text x={x + width / 2} y={y} fill="#ffffff" textAnchor="middle" dy={15}>{`points: ${value}`}</text>;
  };

  return (
    <section className="leaderboard__details">
      <BarChart width={600} height={360} data={showData}>
        <Bar dataKey="Accumulative_Points" fill="#E94184" label={renderCustomBarLabel}/>
      </BarChart>
      <section className="leaderboard">
        <div className="leaderboard__titles">
          <h3 className="leaderboard__title">position</h3>
          <h3 className="leaderboard__title">avatar</h3>
          <h3 className="leaderboard__title">usename</h3>
          <h3 className="leaderboard__title">actvity</h3>
          <h3 className="leaderboard__title">challenges</h3>
          <h3 className="leaderboard__title">Improvement</h3>
          <h3 className="leaderboard__title">total</h3>
        </div>
        <div className="leaderboarddetails__rankings">
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">1</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
        </div>
        <div className="leaderboarddetails__rankings">
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">2</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
        </div>
        <div className="leaderboarddetails__rankings">
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">3</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">4</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">5</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">6</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>
          <div className="leaderboarddetails__ranking-field">
            <h3 className="leaderboarddetails__ranking">7</h3>
            <img className="leaderboarddetails__avatar" src={Avatar9} alt="" />
            <h3 className="leaderboarddetails__name">Phoenix Whisper</h3>
            <h3 className="leaderboarddetails__activity">204</h3>
            <h3 className="leaderboarddetails__challenges">156</h3>
            <h3 className="leaderboarddetails__improvement">400</h3>
            <h3 className="leaderboarddetails__total">204</h3>
          </div>

        </div>
      </section>
    </section>
  );
};

export default LeaderBoardDetails;
