import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import { TextInput } from 'vcc-ui';
import './Home.css';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Home: React.FC = () => {
  const [cars, setCars] = useState<carProps[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<carProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`api/cars.json`);
        const data = await res.json();
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cars && searchTerm !== '') {
      const newList: carProps[] = cars.filter((car) => {
        return car.bodyType.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredCars(newList);
    } else {
      cars && setFilteredCars(cars);
    }
  }, [searchTerm, cars]);

  return (
    <>
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='filter'>
            <TextInput
              value={searchTerm}
              label='Filter by car type'
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          {cars && cars.length > 0 && searchTerm.length < 1 ? (
            <>
              <Carousel cars={cars} />
            </>
          ) : (
            <Carousel cars={filteredCars} />
          )}
        </>
      )}
    </>
  );
};

export default Home;
