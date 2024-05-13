import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const wonderCatModal = require('../images/wonderCatModal.png');

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // redirect to privios page after 2 sec
      navigate(-1);
    }, 2000);
  });
  return (
    <>
      <h1>Page not found ((((</h1>
      <img
        className="catImage"
        src={wonderCatModal}
        alt="not found"
      />
    </>
  );
};

export default NotFound;
