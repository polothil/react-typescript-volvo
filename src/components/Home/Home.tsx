import React, { useEffect } from 'react';
import carsData from '../../cars.json';
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
  const [cars, setCars] = useState<carProps[]>(carsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<carProps[]>([]);
  const [value, setValue] = React.useState('C30');

  useEffect(() => {
    if (searchTerm !== '') {
      const newList: carProps[] = cars.filter((car) => {
        return car.bodyType.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredCars(newList);
    } else {
      setFilteredCars(cars);
    }
  }, [searchTerm]);

  const handleChange = (filterStr: string) => {
    setSearchTerm(filterStr);
    if (filterStr !== '') {
      const newList: carProps[] = cars.filter((car) => {
        return car.bodyType.toLowerCase().includes(filterStr.toLowerCase());
      });
      setFilteredCars(newList);
    } else {
      setFilteredCars(cars);
    }
  };

  return (
    <>
      <Header />
      <div className='filter'>
        <TextInput
          value={searchTerm}
          label='Filter by car type'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {cars.length > 0 && searchTerm.length < 1 ? (
        <Carousel cars={cars} />
      ) : (
        <Carousel cars={filteredCars} />
      )}
    </>
  );
};

export default Home;
