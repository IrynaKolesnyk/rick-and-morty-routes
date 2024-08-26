import React from 'react';
import { Link } from 'react-router-dom';
import { AllCategoryType } from '../../shared/types';

const CategoriesLinks = ({
  dataArr,
  pathName,
}: {
  dataArr: AllCategoryType[];
  pathName: string;
}) => {
  return (
    <div>
      {dataArr.map(item => {
        return (
          <ul key={item.id}>
            <li>
              <Link to={`${pathName}/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default CategoriesLinks;
