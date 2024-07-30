import { useContext } from "react";
import { FirstName, LastName } from "../tasks/Task10.jsx";

export function C3() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <div className="text-4xl font-bold">
      {fname} {lname}
    </div>
  );
}
