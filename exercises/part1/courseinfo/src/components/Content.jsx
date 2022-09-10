import React from "react";
import Part from "./Part";

export default function Content(props) {
  return (
    <div>
      {props.parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
}
