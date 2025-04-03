import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const removeValue = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count the Number</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Decrease Value</button>
      <p>footer</p>
    </>
  );
}

export default App;
