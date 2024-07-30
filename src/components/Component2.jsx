import { Component3 } from "./Component3";
import { createContext } from "react";

export const Student = createContext("");

export function Component2() {
  return (
    <Student.Provider value="KYC">
      <Component3 />
    </Student.Provider>
  );
}
