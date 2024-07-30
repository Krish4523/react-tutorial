import { useState, useEffect } from "react";

/* Digital Clock using useEffect */
export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  });

  return (
    <h1 className="text-[4rem] font-bold font-mono">
      {time.toLocaleTimeString()}
    </h1>
  );
}
