/* take user inputs n1, n2 perform addition & subtraction using useState hook */
import { useState } from "react";

export function Task11() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);

  return (
    <div className="flex flex-col items-start gap-2 mb-4">
      <input
        type="number"
        name="age"
        id="age"
        defaultValue={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        className="px-4 py-2 rounded-md w-1/2"
      />
      <input
        type="number"
        name="age"
        id="age"
        defaultValue={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        className="px-4 py-2 rounded-md w-1/2"
      />
      <div className="flex gap-4">
        <button onClick={() => setAdd(num1 + num2)}>Add</button>
        <button onClick={() => setSub(num1 - num2)}>Sub</button>
      </div>
      <p>Addition = {add}</p>
      <p>Subtraction = {sub}</p>
    </div>
  );
}
