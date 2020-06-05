import React from "react";

import Categories from "./Categories";

const Main = () => {
  return (
    <div className='main'>
      <div className='upper-nav'>Upper Nav</div>
      <div className='main-content'>
        <Categories />
      </div>
    </div>
  );
};

export default Main;
