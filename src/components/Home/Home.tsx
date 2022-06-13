import React from 'react';
import carsData from '../../cars.json';
import { useState } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Carousel from '../Carousel/Carousel';

export type carProps = {
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
      <Search filter={handleChange} />
      {cars.length > 0 && searchTerm.length < 1 ? (
        <Carousel cars={cars} />
      ) : (
        <Carousel cars={filteredCars} />
      )}
    </>
  );
};

export default Home;
