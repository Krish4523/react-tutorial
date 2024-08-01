import { useContext } from "react";
import { FormContext } from "./FormExample.jsx";

export function F3() {
  const { formData } = useContext(FormContext);
  return (
    <div>
      <h3>Submitted Data:</h3>
      <ul className="flex items-start flex-col">
        {formData &&
          Object.entries(formData).map(([key, value]) => (
            <li key={key} className="flex justify-between gap-x-2">
              <strong>
                {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}:
              </strong>{" "}
              {value}
            </li>
          ))}
      </ul>
    </div>
  );
}
