import { useState, useEffect } from "react";

/* Digital Clock using useEffect */
export function Clock() {
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  // console.log("Rendered");
  useEffect(() => {
    setInterval(() => setSeconds((prevSec) => prevSec + 1), 1000);
  }, []);
  useEffect(() => {
    console.log("Rendered");
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <h1 className="text-[4rem] font-bold font-mono">
        {time.toLocaleTimeString()}
      </h1>
      {seconds}
    </>
  );
}
