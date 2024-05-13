import React from 'react';
import { Link } from 'react-router-dom';
const charactersArr = require('../appData/characters.json');

interface Сharacter {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  species: string;
}

const Сharacters = () => {
  return (
    <div>
      {charactersArr.map(
        (character: Сharacter) => {
          return (
            <ul key={character.id}>
              <li>
                <Link
                  to={`/characters/${character.id}`}
                >
                  <p>{character.name}</p>
                </Link>
              </li>
            </ul>
          );
        },
      )}
    </div>
  );
};

export default Сharacters;
