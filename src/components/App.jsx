import React, { useState } from "react";

function App() {
  const [text, newText] = useState("");
  const [data, currentData] = useState([]);

  function handleChange(event) {
    newText(event.target.value);
  }

  function handleClick() {
    currentData((prevValue) => {
      return [...prevValue, text];
    });
    newText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
