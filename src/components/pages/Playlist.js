import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../svg/play.svg";
import { ReactComponent as HeartIcon } from "../../svg/heart.svg";
import { ReactComponent as NoteIcon } from "../../svg/note.svg";

const PlaylistPage = () => {
  let { id } = useParams();

  return (
    <div className='playlist-page'>
      <div className='main-inner'>
        <div className='playlist-page-header'>
          <div className='playlist-page-image'>
            <img
              src='https://images.unsplash.com/photo-1573255437415-ea46be7057d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              alt='city neon'
            />
          </div>
          <div className='playlist-page-title'>
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
          <div className='playlist-buttons'>
            <span className='icon play-icon'>
              <PlayIcon />
            </span>
            <span className='icon heart-icon'>
              <HeartIcon />
            </span>
            <span className='icon dots-icon'>•••</span>
          </div>
          <ul className='song-list'>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className='song-icon'>
                <NoteIcon />
              </div>
              <div className='song-details'>
                <h3>Held Down</h3>
                <span>Laura Marling</span> • <span>Held Down</span>
              </div>
              <div className='song-time'>
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
