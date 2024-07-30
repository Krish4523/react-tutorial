import { useContext } from "react";
import { NumberContext } from "./T2.jsx";

export function T3() {
  const num = useContext(NumberContext);
  return (
    <span>
      {num}
      <sup>2</sup> = {num ** 2}
    </span>
  );
}
