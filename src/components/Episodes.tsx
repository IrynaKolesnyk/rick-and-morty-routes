import React from 'react';
const episodesArr = require('../appData/episode.json');

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

const Episodes = () => {
  return (
    <div>
      {episodesArr.map((episode: Episode) => {
        return (
          <ul key={episode.id}>
            <li>
              <p>{episode.name}</p>
            </li>
            <li>
              <p>{episode.air_date}</p>
            </li>
            <li>
              <p>{episode.episode}</p>
            </li>
            <li>
              <p>{episode.created}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Episodes;
