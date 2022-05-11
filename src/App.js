import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("*");

  const fetching = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((info) => {
        setState(info.content);
      });
  };

  // useEffect(() => {
  //   if (wis === "*") {
  //     console.log(wis);
  //     fetching();
  //   }
  // }, [wis]);

  return (
    <div>
      <h1 className="text">Quote of the day</h1>

      <p className="text">Click to get today's wisdom</p>

      <button className="button" onClick={fetching}>
        Get Wisdom
      </button>

      <div className="box">
        <p className="output subtext">{state}</p>
      </div>
    </div>
  );
}

export default App;
