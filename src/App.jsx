import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + count);

  const formattedDate = targetDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="steps">
        <button onClick={() => setStep((s) => Math.max(1, s - 1))}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="counts">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{formattedDate}</span>
      </p>
    </>
  );
}

export default App;
