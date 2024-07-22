import { Component3 } from "./Component3";
import { createContext, useContext } from "react";
import { Styles } from "./Task10.jsx";

export const Student = createContext("");

export function Component2() {
  const { bgColor, color, fontsize } = useContext(Styles);

  return (
    <Student.Provider value="KYC">
      <div style={{ backgroundColor: bgColor, color, fontSize: fontsize }}>
        <Component3 />
      </div>
    </Student.Provider>
  );
}
