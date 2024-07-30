import { useContext } from "react";
import { Numbers } from "./Comp.jsx";

function Comp3() {
  const { n1, n2 } = useContext(Numbers);
  return (
    <p>
      {n1} * {n2} = {n1 * n2}
    </p>
  );
}

export default Comp3;
