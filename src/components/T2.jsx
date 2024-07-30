import { T3 } from "./T3.jsx";
import { createContext, useContext } from "react";
import { StyleContext } from "./T1.jsx";

export const NumberContext = createContext(10);

export function T2() {
  const { color, fontSize } = useContext(StyleContext);
  return (
    <NumberContext.Provider value={5}>
      <div style={{ color, fontSize }}>
        <T3 />
      </div>
    </NumberContext.Provider>
  );
}
