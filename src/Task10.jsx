import { createContext } from "react";

import { C1 } from "./C1.jsx";
import { Comp } from "./Comp.jsx";
import { Component1 } from "./Component1.jsx";

export const FirstName = createContext("");
export const LastName = createContext("");
export const Styles = createContext({});

/* Create Comp.jsx other component files named Comp-1,2,3
 * pass two numbers n1,n2 from Comp.jsx to Comp3.js calculate multiplication
 *  */
export function Task10() {
  return (
    <>
      <FirstName.Provider value={"Krish"}>
        <LastName.Provider value={"Chauhan"}>
          <C1 />
          <Comp />
        </LastName.Provider>
      </FirstName.Provider>
      {/* use multiple context by creating & consuming them across different components
       * 1. createContext for CSS (bgColor, color, fontsize), provide to Comp1
       * 2. Comp1 create context for a string value(students) provides to Comp2
       * 3. Comp2 consumes both context & display a message with style to string
       * */}
      <Styles.Provider
        value={{
          bgColor: "blue",
          color: "white",
          fontsize: 16,
        }}
      >
        <Component1 />
      </Styles.Provider>
    </>
  );
}
