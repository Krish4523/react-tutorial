import { useContext } from "react";
import { Student } from "./Component2.jsx";

export function Component3() {
  const student = useContext(Student);
  return <span>{student}</span>;
}
