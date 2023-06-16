import "./ChooseAvatar.scss";
import animalIconURL from "../../assets/logos/Ellipse 12.png";
import backgroundURL from "../../assets/icons/maxresdefault.jpg";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image1 from "../../assets/icons/Ellipse 3.svg";
import image2 from "../../assets/icons/Ellipse 4.svg";
import image3 from "../../assets/icons/Ellipse 5.svg";
import image4 from "../../assets/icons/Ellipse 9.svg";
import image5 from "../../assets/icons/Ellipse 18.svg";

const randomNames = ["Name1", "Name2", "Name3"];

export default function ChooseAvatar({ setFinalName }) {
  const [inputName, setInputName] = useState("");
  const [finalBackground, setFinalBackground] = useState("");
  const { studentId } = useParams();

  const navigate = useNavigate();

  const handleRandom = async (e) => {
    e.preventDefault();
    await setInputName(randomNames[0]);
  };

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    setFinalName(inputName);
    navigate(`/${studentId}/leaderboard`);
  };

  return (
    <>
      <section className="choose-section">
        <h1 className="choose-section__title">Choose your avatar</h1>
        <div className="choose-section__avatars-container">
          <img className="choose-section__avatar" src={image1} alt="" />
          <img className="choose-section__avatar" src={image2} alt="" />
          <img className="choose-section__avatar" src={image3} alt="" />
          <img className="choose-section__avatar" src={image4} alt="" />
          <img className="choose-section__avatar" src={image5} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
        </div>

        <h2 className="enter-name">Enter your name</h2>
        <form className="form">
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            onChange={(e) => handleInputChange(e)}
            defaultValue={inputName}
          />
          <button className="button" onClick={(e) => handleRandom(e)}>
            Generate random name
          </button>
          <button className="button" onClick={(e) => handleSaveName(e)}>
            save name
          </button>
        </form>
      </section>
    </>
  );
}
