import { Component2 } from "./Component2.jsx";
import { useContext } from "react";
import { Styles } from "../tasks/Task10.jsx";

export function Component1() {
  const { bgColor, color, fontsize } = useContext(Styles);
  return (
    <div style={{ backgroundColor: bgColor, color, fontSize: fontsize }}>
      <Component2 />
    </div>
  );
}
