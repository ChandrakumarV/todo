import React, { useState } from "react";

function App() {
  const [fuck, few] = useState("");
  const [leg, hand] = useState([]);

  function handle(event) {
    const gig = event.target.value;
    few(gig);
  }

  function head() {
    hand((prevValue) => {
      return [...prevValue, fuck];
    });
    few("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={fuck} />
        <button onClick={head}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {leg.map((turp) => (
            <li>{turp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
