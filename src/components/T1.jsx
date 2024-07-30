import { createContext } from "react";
import { T2 } from "./T2.jsx";

export const StyleContext = createContext({ color: "#000", fontSize: "1rem" });

export function T1() {
  return (
    <StyleContext.Provider value={{ color: "#FFF", fontSize: "1.5rem" }}>
      <T2 />
    </StyleContext.Provider>
  );
}
