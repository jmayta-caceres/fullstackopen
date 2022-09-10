import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const getRandomNumber = (max) => {
    return Math.round(Math.random() * max);
  };

  const getRandomAnecdote = () => {
    setSelected(getRandomNumber(anecdotes.length));
  };

  const handleVoteIncrement = (selected) => {
    let newPoints = { ...points };
    newPoints[selected] += 1;

    const incrementVote = () => {
      setPoints(newPoints);
    };
    return incrementVote;
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVoteIncrement(selected)}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
