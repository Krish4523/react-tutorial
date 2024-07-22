import React, { createContext } from "react";
import { Comp1 } from "./Comp1.jsx";

export const Numbers = createContext({ n1: 0, n2: 0 });

export function Comp() {
  return (
    <Numbers.Provider value={{ n1: 10, n2: 5 }}>
      <Comp1 />
    </Numbers.Provider>
  );
}
