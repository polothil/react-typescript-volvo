import React from 'react';
import { View, Button } from 'vcc-ui';
import { useParams, useNavigate } from 'react-router-dom';

const Shop = () => {
  const history = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div>Shop {id}</div>
      <div className='btn-group'>
        <View maxWidth='280'>
          <Button onClick={() => history(`/`)}>Back to home</Button>
        </View>
      </div>
    </>
  );
};

export default Shop;
