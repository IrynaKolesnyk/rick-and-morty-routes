import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../shared/types';

interface CategoryProps {
  category: ICategory;
}

const Category: React.FC<CategoryProps> = ({
  category,
}) => {
  const navigate = useNavigate();

  const onBackHandler = () => {
    navigate(-1);
    //or window.history.back();
  };

  return (
    <div>
      <button onClick={onBackHandler}>
        BACK
      </button>
      <ul key={category.id}>
        <li>
          <p>Name: {category.name}</p>
        </li>
        {category.status &&
          category.status !== 'unknown' && (
            <li>
              <p>Status: {category.status}</p>
            </li>
          )}
        {category.species && (
          <li>
            <p>Species: {category.species}</p>
          </li>
        )}
        {category.type && (
          <li>
            <p>Type: {category.type}</p>
          </li>
        )}
        {category.gender && (
          <li>
            <p>Gender: {category.gender}</p>
          </li>
        )}

        {category.created && (
          <li>
            <p>Created: {category.created}</p>
          </li>
        )}

        {category.dimension && (
          <li>
            <p>Dimension: {category.dimension}</p>
          </li>
        )}

        {category.air_date && (
          <li>
            <p>Air date: {category.air_date}</p>
          </li>
        )}

        {category.episode && (
          <li>
            <p>Episode: {category.episode}</p>
          </li>
        )}

        {category.image && (
          <li>
            <p>
              {
                <img
                  src={category.image}
                  alt={category.name}
                />
              }
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Category;
