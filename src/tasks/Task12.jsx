import { useState } from "react";

export function Task12() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(
          `Name: ${name}\nAddress: ${address}\nBranch: ${branch}\nCity: ${city}`,
        );
      }}
    >
      <div className="flex flex-col gap-4 items-start mb-4 w-1/2">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded-md w-full"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="px-4 py-2 rounded-md w-full"
        ></textarea>

        <select
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-md"
        >
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Baroda">Baroda</option>
          <option value="Morbi">Morbi</option>
        </select>
        <div className="flex gap-2">
          <label>Branch: </label>
          <label>
            <input
              type="radio"
              name="branch"
              value="CST"
              onChange={(e) => setBranch(e.target.value)}
            />{" "}
            CST
          </label>
          <label>
            <input
              type="radio"
              name="branch"
              value="IT"
              onChange={(e) => setBranch(e.target.value)}
            />{" "}
            IT
          </label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
  /* */
}
