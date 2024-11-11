import Log from "./log";
import Second from './second';
import Third from "./Third";
import { useState } from "react";
import "./App.css";


function App() {
  let [counter, setcounter] = useState(0);

  const addvalue = () => {
    setcounter(counter + 1);
  };

  const removevalue = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <Log/>
      <Second/>
      <Third/>
    </>
  );
}

export default App;
