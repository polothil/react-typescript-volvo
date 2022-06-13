import React from 'react';

import './Search.css';

type SearchProps = {
  filter(arg: string): void;
};

const Search: React.FC<SearchProps> = ({ filter }) => {
  const handleChange = (e: { target: { value: string } }) => {
    filter(e.target.value);
  };

  return (
    <div className='filter'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='filter by type'
        onChange={handleChange}
      />
      <label htmlFor='search'>
        <>&#x1F50D;</>
      </label>
    </div>
  );
};

export default Search;
