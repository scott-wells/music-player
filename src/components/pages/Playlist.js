import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../svg/play.svg";

const PlaylistPage = () => {
  let { id } = useParams();

  return (
    <div className='playlist-page'>
      <div className='main-inner'>
        <div className='playlist-page-info'>
          <div className='playlist-page-image'>
            <img
              src='https://images.unsplash.com/photo-1573255437415-ea46be7057d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='city neon'
            />
          </div>
          <div className='playlist-page-content'>
            <p className='small-text uppercase bold'>Playlist</p>
            <h1>A Perfect Day</h1>
            <p className='tagline'>
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className='playlist-page-desc'>
              <span className='spotify'>Spotify</span>
              <span>699,428 likes • 4hr 35min</span>
            </div>
          </div>
        </div>
        <div className='playlist-page-songs'>
          <div className='play-list-buttons'>
            <span className='play-icon'>
              <PlayIcon />
            </span>
            <div className='icons'>
              <div className='icons-heart'></div>
              <div className='icons-dots'></div>
            </div>
          </div>
          <ul>
            <li>Song one</li>
            <li>Song two</li>
            <li>Song three</li>
            <li>Song four</li>
            <li>Song five</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
