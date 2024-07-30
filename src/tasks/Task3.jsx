import { useState } from "react";

// Events in React
export function Task3 () {
  const [text, setText] = useState("");
  return (
    <>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          setText("clear");
        }}
        className="flex gap-4 mb-4"
      >
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
          className="px-4 py-2 rounded-md focus:border-1 focus:border-blue-400"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h5
        style={{ cursor: "pointer" }}
        onClick={() => setText("Single Clicked")}
        onDoubleClick={() => setText("Double CLicked")}
      >
        {text}
      </h5>
    </>
  );
}
