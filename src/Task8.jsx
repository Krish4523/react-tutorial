import { useState } from "react";

export function Task8() {
  const [text, setText] = useState("LJ University");
  const [textColor, setTextColor] = useState("red");
  const [hideText, setHideText] = useState("Hide");
  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() =>
            setText(
              text === "LJ University" ? "Welcome Students" : "LJ University",
            )
          }
        >
          Change Text
        </button>
        <button
          onDoubleClick={() =>
            setTextColor(textColor === "red" ? "blue" : "red")
          }
        >
          Change Color
        </button>
        <button
          onClick={() => setHideText(hideText === "Show" ? "Hide" : "Show")}
        >
          {hideText}
        </button>
      </div>
      <h1 style={{ color: textColor }}>{text}</h1>
      <h2 hidden={hideText === "Show"}>ReactJS Hooks</h2>
    </div>
  );
}
