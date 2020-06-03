import React from "react";

const Main = () => {
  return (
    <div className='main'>
      <div className='upper-nav'>Upper Nav</div>
      <div className='main-content'>
        <h1>Uniquely Yours</h1>
        <div className='cards-wrap'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                alt='Pic 1'
              />
            </div>
            <div className='card-content'>
              <h3>Liked Songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
