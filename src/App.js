import React from "react";
import "./App.scss";

function App() {
  return (
    <div className='outer-wrap'>
      <div className='App'>
        <div className='navbar'>
          <div className='logo'>logo</div>
        </div>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Your Library</li>
        </ul>
      </div>
      <div className='music-controls'>music controls</div>
    </div>
  );
}

export default App;
