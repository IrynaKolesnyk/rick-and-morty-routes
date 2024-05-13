import React from 'react';
const locationsArr = require('../appData/location.json');

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

const Locations = () => {
  return (
    <div>
      {locationsArr.map((location: Location) => {
        return (
          <ul key={location.id}>
            <li>{location.name}</li>
            <li>{location.type}</li>
            <li>{location.dimension}</li>
            <li>{location.created}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Locations;
