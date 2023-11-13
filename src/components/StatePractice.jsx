import React, { useState } from "react";
import "../StatePractice.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function StatePracetice() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [clickCount, setClickCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setClickCount(clickCount + 1);
  };

  return (
    <div
      className="StatePracetice"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <p>Background color is changed {clickCount} times.</p>
    </div>
  );
}

export default StatePracetice;
