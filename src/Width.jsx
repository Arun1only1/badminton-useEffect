import React, { useEffect, useState } from "react";

const Width = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const resizeWindow = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    console.log("width wala");
    window.addEventListener("resize", resizeWindow);

    return () => {
      console.log("clean up for width ran");
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <div>
      <h1>Width:{width} px</h1>
      <h1>Height:{height} px</h1>
    </div>
  );
};

export default Width;
