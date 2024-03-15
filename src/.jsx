import React, { useEffect, useState } from "react";

const movies = [
  "Oppenheimer",
  "Inception",
  "Shutter Island",
  "The Green Mile",
  "The Basketball Diaries",
  "Animal",
];
const MovieList = () => {
  const [light, setLight] = useState(false);
  const deleteMovie = (name) => {
    const newList = movies.filter((item) => item !== name);
  };

  useEffect(() => {}, [light]);
  return (
    <div>
      {movies.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex", gap: "1rem" }}>
            <p>{item}</p>
            <button onClick={() => setLight(!light)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
