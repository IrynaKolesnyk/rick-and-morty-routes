import { useParams } from 'react-router-dom';
import findItem from '../shared/findItem';
import Category from './reusableComponents/Category';

const charactersArr = require('../appData/characters.json');

const Character = () => {
  const { id } = useParams();

  const character = findItem(charactersArr, id);

  return <Category category={character} />;
};

export default Character;
