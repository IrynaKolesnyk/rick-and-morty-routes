import {
  useNavigate,
  useParams,
} from 'react-router-dom';

const charactersArr = require('../appData/characters.json');

const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = charactersArr.find(item => {
    return String(item.id) === id;
  });

  const onBackHandler = () => {
    navigate(-1);
    //or window.history.back();
  };

  return (
    <div>
      <button onClick={onBackHandler}>
        BACK
      </button>
      <ul key={character.id}>
        <li>
          <p>{character.name}</p>
        </li>
        <li>
          <p>{character.status}</p>
        </li>
        <li>
          <p>{character.species}</p>
        </li>
        {character.type && (
          <li>
            <p>{character.type}</p>
          </li>
        )}
        <li>
          <p>{character.gender}</p>
        </li>
        <li>
          <p>
            {
              <img
                src={character.image}
                alt={character.name}
              />
            }
          </p>
        </li>
        <li>
          <p>{character.created}</p>
        </li>
      </ul>
    </div>
  );
};

export default Character;
