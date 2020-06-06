import React from "react";
import { ReactComponent as PlayIcon } from "../svg/play.svg";
import { Link } from "react-router-dom";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home Playlist 1",
      img:
        "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home Playlist 2",
      img:
        "https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1495954380655-01609180eda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus Playlist",
      img:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday Playlist",
      img:
        "https://images.unsplash.com/photo-1589147276730-101459891218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood Playlist 1",
      img:
        "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood Playlist 2",
      img:
        "https://images.unsplash.com/photo-1500239038240-9b3b8bac73c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
      desc:
        "Pudding dessert gingerbread lemon drops lemon drops jelly fruitcake.",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className='cards-wrap-inner'>
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className='card'>
            <div className='card-image'>
              <img src={playlist.img} alt='Pic 1' />
            </div>
            <div className='card-content'>
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className='play-icon'>
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Playlists;
