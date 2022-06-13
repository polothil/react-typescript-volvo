import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Shop = () => {
  const history = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div>Shop {id}</div>
      <div className='btn-group'>
        <button onClick={() => history(`/`)}>Back to home</button>
      </div>
    </>
  );
};

export default Shop;
