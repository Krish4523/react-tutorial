import React, { useState, useEffect } from "react";

const Ex = () => {
  const [seconds, setSeconds] = useState(0);
  console.log("rendered");
  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    // return () => clearInterval(intervalID);
  }, []);
  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
};
export default Ex;
