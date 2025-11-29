import { useState, useEffect } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Count: {count}</h2>

      <button
        onClick={() => setIsRunning(true)}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginRight: "10px",
          cursor: "pointer"
        }}
      >
        Start
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setCount(0);
        }}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default AutoCounter;
