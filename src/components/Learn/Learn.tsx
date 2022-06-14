import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { View, Button } from 'vcc-ui';
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
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/cars.json`);
        const data = await res.json();
        setCarDetails(data.filter((car: carProps) => car.id === id));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const renderCar = () => {
    return (
      <>
        {carDetails && (
          <>
            <h1>{carDetails[0].modelName}</h1>
            <h2>{carDetails[0].bodyType.toUpperCase()}</h2>
            <h2>{carDetails[0].modelType.toUpperCase()}</h2>
            <img src={carDetails[0].imageUrl} alt='' />
          </>
        )}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='content'>
          {carDetails && renderCar()}
          {carDetails !== undefined && (
            <div className='btn-group'>
              <View maxWidth='280'>
                <Button onClick={() => history(`/`)}>Back to home</Button>
              </View>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Learn;
