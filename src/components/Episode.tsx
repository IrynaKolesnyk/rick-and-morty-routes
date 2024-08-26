import React from 'react';
import { useParams } from 'react-router-dom';
import findItem from '../shared/findItem';
import Category from './reusableComponents/Category';

const episodesArr = require('../appData/episode.json');

const Episode = () => {
  const { id } = useParams();

  const episode = findItem(
    episodesArr,
    id ? id : '1',
  );

  return <Category category={episode} />;
};

export default Episode;
