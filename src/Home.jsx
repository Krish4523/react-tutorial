import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  /* Increment(upto 10) & decrement(upto 0) buttons  */
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="text-5xl font-bold">HELLO REACT</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <input
        type="number"
        name="age"
        id="age"
        defaultValue={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="px-4 py-2 rounded-md"
      />
      <p>You are {age < 18 ? "young" : "adult"}</p>

      <div className="my-8">
        <label className="relative">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-4 rounded-lg bg-transparent border-2 border-white border-opacity-50 outline-none focus:border-blue-600 focus:text-white transition duration-400"
          />
          <span
            className={`input-text absolute text-white text-opacity-80 top-0 left-4 transition duration-400 ${
              username
                ? "text-sm text-blue-600 -translate-y-7 bg-[#242424] px-2"
                : "-translate-y-1"
            }`}
          >
            Username
          </span>
        </label>
        <p>{username}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => {
            if (number < 10) setNumber(number + 1);
          }}
        >
          ↑
        </button>
        {number}
        <button
          onClick={() => {
            if (number > 0) setNumber(number - 1);
          }}
        >
          ↓
        </button>
      </div>
    </>
  );
}

export default Home;
