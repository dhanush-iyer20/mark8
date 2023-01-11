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
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={(e) => {
          if (e.target.value == "") {
            return setError(""), setEmostate("");
          }
          for (let i = 0; i < arrOfEmo.length; i++) {
            if (e.target.value == arrOfEmo[i]) {
              return setEmostate(e.target.value), setError("");
            }
          }
          return setError("error in finding emoji");
        }}
      />
      <h3>{emoDic[emostate]}</h3>
      <h3>{error}</h3>
      {arrOfEmo.map((x) => x)}
    </div>
  );
}
