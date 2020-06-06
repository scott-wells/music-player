import React from "react";
import { Switch, Route } from "react-router-dom";
import PlaylistPage from "./pages/Playlist";

import Categories from "./Categories";

const Main = () => {
  return (
    <div className='main'>
      <div className='upper-nav'>Upper Nav</div>
      <div className='main-content'>
        <Switch>
          <Route exact path='/' component={Categories}></Route>
          <Route path='/search'>SEARCH</Route>
          <Route path='/your-library'>YOUR LIBRARY</Route>
          <Route path='/playlist/:id' component={PlaylistPage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
