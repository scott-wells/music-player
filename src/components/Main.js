import React from "react";
import { ReactComponent as PlayIcon } from "../svg/play.svg";
const Main = () => {
  return (
    <div className='main'>
      <div className='upper-nav'>Upper Nav</div>
      <div className='main-content'>
        <div className='cards-wrap'>
          <h1>Uniquely Yours</h1>
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
            <span className='play-icon'>
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className='cards-wrap'>
          <h2>Focus</h2>
          {/* <span className='see-all'>SEE ALL</span> */}
          <p className='subtext'>Music to help you concentrate.</p>
          <div className='cards-wrap-inner'>
            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                  alt='Pic 1'
                />
              </div>
              <div className='card-content'>
                <h3>Creativity Boost</h3>
                <span>Miinimalism, electonica and modern...</span>
              </div>
              <span className='play-icon'>
                <PlayIcon />
              </span>
            </div>

            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                  alt='Pic 1'
                />
              </div>
              <div className='card-content'>
                <h3>Creativity Boost</h3>
                <span>Miinimalism, electonica and modern...</span>
              </div>
              <span className='play-icon'>
                <PlayIcon />
              </span>
            </div>

            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                  alt='Pic 1'
                />
              </div>
              <div className='card-content'>
                <h3>Creativity Boost</h3>
                <span>Miinimalism, electonica and modern...</span>
              </div>
              <span className='play-icon'>
                <PlayIcon />
              </span>
            </div>

            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                  alt='Pic 1'
                />
              </div>
              <div className='card-content'>
                <h3>Creativity Boost</h3>
                <span>Miinimalism, electonica and modern...</span>
              </div>
              <span className='play-icon'>
                <PlayIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
