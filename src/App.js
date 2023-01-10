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

// function showAllArrElements(prop) {
//   for (let i = 0; i < n; i++) {
//     return <h2>{prop[i]}</h2>;
//   }
// }
export default function App() {
  var [emostate, setEmostate] = useState("");
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={(e) => {
          arrOfEmo.map((x) => {
            if (e.target.value != x) {
              setEmostate("Emoji Not Found");
            } else {
              setEmostate(e.target.value);
            }
          });
        }}
      />
      <h3>{emoDic[emostate]}</h3>
      {arrOfEmo.map((x) => x)}
    </div>
  );
}
