import React from "react";
import "./App.scss";

import Nav from "./components/Nav";
import Main from "./components/Main";

const App = () => {
  return (
    <div className='outer-wrap'>
      <div className='App'>
        <Nav />
        <Main />
      </div>
      <div className='music-controls'>music controls</div>
    </div>
  );
};

export default App;
