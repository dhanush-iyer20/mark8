import "./styles.css";
import { useState } from "react";

const emoDic = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😐": "Neutral Face",
};
const arrOfEmo = Object.keys(emoDic);

export default function App() {
  var [emostate, setEmostate] = useState("");
  var [error, setError] = useState("");

  function checkIfEmoInArray(e) {
    console.log(e.target.value);
    for (let i = 0; i < arrOfEmo.length; i++) {
      if (e.target.value == arrOfEmo[i]) {
        return setEmostate(e.target.value), setError("");
      }
    }
    return setError("error in finding emoji"), setEmostate("");
  }

  return (
    <div className="App">
      <div className="content">
        <h1 className="aniText">Emoji Dictionary</h1>
      </div>
      <input
        className="inputelement"
        onChange={(e) => {
          //case of empty input box
          if (e.target.value == "") {
            return setError(""), setEmostate("");
          }
          //for loop to check whether the input lies in the keys array
          checkIfEmoInArray(e);
        }}
        placeholder="type an emoji or click below"
      />
      <h3 className="mainText">{emoDic[emostate]}</h3>
      <h3>{error}</h3>
      {arrOfEmo.map((x) => (
        <button
          className="emoBtns"
          key={x}
          value={x}
          onClick={(e) => checkIfEmoInArray(e)}
        >
          {x}
        </button>
      ))}
    </div>
  );
}
