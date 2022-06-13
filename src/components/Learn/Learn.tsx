import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import carsData from '../../cars.json';
import './Learn.css';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Learn = () => {
  const [carDetails, setCarDetails] = useState<carProps[]>();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setCarDetails(carsData.filter((car) => car.id === id));
  }, [id]);

  const renderCars = () => {
    return (
      <>
        {carDetails && (
          <>
            <h1>{carDetails[0].modelName}</h1>
            <h2>{carDetails[0].bodyType}</h2>
            <h2>{carDetails[0].modelType}</h2>
            <img src={carDetails[0].imageUrl} alt='' />
          </>
        )}
      </>
    );
  };

  return (
    <>
      <div className='content'>
        {carDetails && renderCars()}
        {carDetails !== undefined && (
          <div className='btn-group'>
            <button onClick={() => history(`/`)}>Back to home</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Learn;
