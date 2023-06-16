import "./StudentGoals.scss";

export default function StudentGoals() {
  return (
    <>
      <section className="goals">
        <h1 className="goals__title">Week's Goals</h1>
        <div className="goals__week-container">
          <div className="goals__day-container goals__day-container--first">
            <div className="goals__day">M</div>
            {/* <p className="goals__day-descr">Monday</p> */}
          </div>

          <div className="goals__day-container goals__day-container--first">
            <div className="goals__day">T</div>
            {/* <p className="goals__day-descr">Tuesday</p> */}
          </div>

          <div className="goals__day-container goals__day-container--middle">
            <div className="goals__day goals__day--middle">W</div>
            <p className="goals__day-descr">Wednesday</p>
          </div>

          <div className="goals__day-container goals__day-container--last">
            <div className="goals__day">T</div>
            {/* <p className="goals__day-descr">Thursday</p> */}
          </div>

          <div className="goals__day-container goals__day-container--last">
            <div className="goals__day">F</div>
            {/* <p className="goals__day-descr">Friday</p> */}
          </div>
        </div>

        <div className="goals__goals-list">
          <div className="goals__cont">
            <p className="goals__goal">Virtual Relay Race</p>
            <button className="goals__button">Go!</button>
          </div>

          <div className="goals__cont">
            <p className="goals__goal">Marathon Trivia</p>
            <button className="goals__button">Go!</button>
          </div>

          <div className="goals__cont">
            <p className="goals__goal">Healthy Meal PLanner</p>
            <button className="goals__button">Go!</button>
          </div>
        </div>
      </section>
    </>
  );
}
