import React, { useState } from "react";
import "./App.css";
import SideEffect from "./SideEffect";

import PostList from "./PostList";
import Width from "./Width";

const App = () => {
  const [currentItem, setCurrentItem] = useState("width");
  return (
    <>
      <div>
        <button onClick={() => setCurrentItem("width")}>width</button>
        <button onClick={() => setCurrentItem("side-effect")}>
          side effect
        </button>
      </div>
      <div>{currentItem === "width" ? <Width /> : <SideEffect />}</div>
    </>
  );
};

export default App;
