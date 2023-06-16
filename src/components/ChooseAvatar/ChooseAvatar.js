import "./ChooseAvatar.scss";
import animalIconURL from "../../assets/logos/Ellipse 12.png";
import backgroundURL from "../../assets/icons/maxresdefault.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const randomNames = ["Name1", "Name2", "Name3"];

export default function ChooseAvatar() {
  const [inputName, setInputName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [finalBackground, setFinalBackground] = useState("");

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
  };

  const handleAddBackground = (e) => {
    setFinalBackground(e.target.src);
  };

  return (
    <>
      <section className="choose-section">
        <h1 className="choose-section__title">Choose your avatar</h1>
        <div className="choose-section__avatars-container">
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
          <img className="choose-section__avatar" src={animalIconURL} alt="" />
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

        <div className="choose-section__backgrounds-container">
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
          <img
            onClick={(e) => handleAddBackground(e)}
            className="choose-section__background"
            src={backgroundURL}
            alt=""
          />
        </div>

        <button onClick={() => navigate("/profile")}>save changes</button>
      </section>
    </>
  );
}
