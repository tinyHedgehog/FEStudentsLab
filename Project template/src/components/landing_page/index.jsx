import React from 'react';
import SearchBar from './SearchBar';
import BeerCard from './BeerCard';
import './index.css';

const Home = () => (
  <div>
    <SearchBar />
    <div className='search-result'>
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
      <BeerCard />
    </div>
  </div>
);

export default Home;