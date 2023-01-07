import "./styles.css";
import { useState } from "react";

var [time, setTime] = useState(new Date().toLocaleTimeString());
export default function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>{time}</h2>
    </div>
  );
}
