import React from "react";

import Playlists from "./Playlists";

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Made for you",
      tagline: "Get better recommendations the more you listen.",
    },
    {
      id: 2,
      name: "Recently played",
      tagline: "",
    },
    {
      id: 3,
      name: "New releases for you",
      tagline: "Brand new music from artists you love.",
    },
    {
      id: 4,
      name: "More of what you like",
      tagline: "Hear a little bit of everything you love.",
    },
  ];

  return (
    <div className='main-inner'>
      {dataCategories.map((category, id) => (
        <div className='cards-wrap' key={id}>
          <h2>{category.name}</h2>
          {/* <span className='see-all'>SEE ALL</span> */}
          <p className='subtext'>{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
